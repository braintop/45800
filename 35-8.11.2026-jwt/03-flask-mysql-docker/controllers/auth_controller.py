from flask import jsonify, request, g
from werkzeug.security import (
    generate_password_hash,
    check_password_hash
)
from mysql.connector import IntegrityError
from models.user_model import UserModel
from middleware.auth_middleware import create_token

class AuthController:

    @staticmethod
    def register():
        data = request.get_json(silent=True) or {}

        required = ['first_name', 'last_name',
                    'email', 'password', 'role']

        if any(
            key not in data or
            data[key] in (None, '')
            for key in required
        ):
            return jsonify(
                {'error': 'Missing required fields'}
            ), 400

        password = str(data['password'])

        # בדיקת אורך מינימלי.
        # לא בטיחות מלאה, אבל גבול ברור.
        if len(password) < 8:
            return jsonify(
                {'error': 'Password must be at least 8 characters'}
            ), 400

        try:
            data['salary'] = float(
                data.get('salary', 0)
            )

            new_id = UserModel.create(
                data,
                generate_password_hash(password)
            )

            if not new_id:
                return jsonify(
                    {'error': 'Could not create user'}
                ), 400

            user = UserModel.get_by_id(new_id)

            # נרשמת, אז קיבלת טוקן.
            # אין צורך להתחבר שוב מיד.
            return jsonify({
                'user': user,
                'token': create_token(user)
            }), 201

        except (ValueError, TypeError):
            return jsonify(
                {'error': 'Invalid salary'}
            ), 400

        except IntegrityError:
            return jsonify(
                {'error': 'Email already exists'}
            ), 409

    @staticmethod
    def login():
        data = request.get_json(silent=True) or {}

        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            return jsonify(
                {'error': 'Email and password are required'}
            ), 400

        user = UserModel.get_by_email(email)

        # שימו לב להודעה הזהה בשני המקרים.
        # אם נכתוב "אימייל לא קיים", נגלה למי
        # ששואל אילו כתובות רשומות אצלנו.
        if not user:
            return jsonify(
                {'error': 'Invalid email or password'}
            ), 401

        if not check_password_hash(
            user['password'],
            str(password)
        ):
            return jsonify(
                {'error': 'Invalid email or password'}
            ), 401

        # לא מחזירים את ה-hash ללקוח
        user.pop('password', None)

        return jsonify({
            'user': user,
            'token': create_token(user)
        })
