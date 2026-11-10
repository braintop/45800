from datetime import datetime, date
from decimal import Decimal

from flask import jsonify, request, g

from models.expense_model import ExpenseModel
from services.llm_service import extract_expense


CATEGORIES = ['food', 'transport', 'bills',
              'entertainment', 'other']

METHODS = ['cash', 'credit_card',
           'bank_transfer']


def is_valid_expense(data):
    if not isinstance(data, dict):
        return False

    description = data.get('description')

    if not isinstance(description, str):
        return False

    if len(description.strip()) == 0:
        return False

    amount = data.get('amount')

    # bool הוא תת-סוג של int בפייתון, ולכן נפסל בנפרד
    if isinstance(amount, bool) or not isinstance(amount, (int, float)):
        return False

    if amount <= 0:
        return False

    if data.get('category') not in CATEGORIES:
        return False

    if data.get('payment_method') not in METHODS:
        return False

    try:
        datetime.strptime(
            str(data.get('spent_at')),
            '%Y-%m-%d'
        )
    except (ValueError, TypeError):
        return False

    return True


def has_number(message):
    """
    בדיקה 9: "בלה בלה בלה".
    המודל חייב להחזיר amount, אז הוא ממציא סכום.
    אם במשפט אין אף ספרה, אין ממה לחלץ סכום.
    """
    return any(ch.isdigit() for ch in message)


def to_json(row):
    """
    המסד מחזיר Decimal ו-date.
    jsonify הופך אותם למחרוזות לא נוחות,
    ולכן ממירים בעצמנו.
    """
    result = {}
    for key, value in row.items():
        if isinstance(value, Decimal):
            result[key] = float(value)
        elif isinstance(value, (date, datetime)):
            result[key] = value.isoformat()
        else:
            result[key] = value
    return result


class ExpenseController:

    @staticmethod
    def create_ai_expense():
        try:
            data = request.get_json(silent=True) or {}
            message = data.get('message')

            if not message or not isinstance(message, str):
                return jsonify(
                    {'error': 'Valid message is required'}
                ), 400

            if not has_number(message):
                return jsonify(
                    {'error': 'No amount found in message'}
                ), 400

            # מהטוקן החתום, לא מגוף הבקשה ולא מהמודל
            user_id = g.current_user['user_id']

            expense = extract_expense(message)

            if not is_valid_expense(expense):
                print('AI returned:', expense)
                return jsonify(
                    {'error': 'AI returned invalid expense'}
                ), 400

            new_id = ExpenseModel.create(
                user_id,
                expense['description'].strip(),
                expense['amount'],
                expense['category'],
                expense['payment_method'],
                expense['spent_at']
            )

            return jsonify(
                to_json(ExpenseModel.get_by_id(user_id, new_id))
            ), 201

        except Exception as error:
            print(error)
            return jsonify(
                {'error': 'Failed to create expense'}
            ), 500

    @staticmethod
    def get_all():
        try:
            user_id = g.current_user['user_id']
            rows = ExpenseModel.get_all(user_id)
            return jsonify([to_json(r) for r in rows])

        except Exception as error:
            print(error)
            return jsonify(
                {'error': 'Failed to get expenses'}
            ), 500

    @staticmethod
    def summary():
        try:
            user_id = g.current_user['user_id']

            # אופציונלי: ?month=2026-11
            month = request.args.get('month')
            year_num = month_num = None

            if month:
                try:
                    parsed = datetime.strptime(month, '%Y-%m')
                except ValueError:
                    return jsonify(
                        {'error': 'month must be YYYY-MM'}
                    ), 400
                year_num, month_num = parsed.year, parsed.month

            rows = ExpenseModel.summary(user_id, year_num, month_num)
            return jsonify([to_json(r) for r in rows])

        except Exception as error:
            print(error)
            return jsonify(
                {'error': 'Failed to get summary'}
            ), 500

    @staticmethod
    def delete(expense_id):
        try:
            user_id = g.current_user['user_id']

            if ExpenseModel.delete(user_id, expense_id) == 0:
                # אותה תשובה גם כשההוצאה של משתמש אחר,
                # כדי לא לגלות שהיא קיימת
                return jsonify(
                    {'error': 'Expense not found'}
                ), 404

            return jsonify({'message': 'Expense deleted'})

        except Exception as error:
            print(error)
            return jsonify(
                {'error': 'Failed to delete expense'}
            ), 500
