from config.db import get_connection


class ExpenseModel:

    # בכל השאילתות user_id נמצא ב-WHERE.
    # בלעדיו כל משתמש יראה וימחק הוצאות של אחרים.

    @staticmethod
    def create(user_id, description, amount,
               category, payment_method, spent_at):
        conn = get_connection()
        try:
            cursor = conn.cursor()
            cursor.execute(
                'INSERT INTO expenses '
                '(user_id, description, amount, '
                'category, payment_method, spent_at) '
                'VALUES (%s, %s, %s, %s, %s, %s)',
                (user_id, description, amount,
                 category, payment_method, spent_at)
            )
            conn.commit()
            return cursor.lastrowid
        finally:
            conn.close()

    @staticmethod
    def get_by_id(user_id, expense_id):
        conn = get_connection()
        try:
            cursor = conn.cursor(dictionary=True)
            cursor.execute(
                'SELECT * FROM expenses '
                'WHERE user_id=%s AND expense_id=%s',
                (user_id, expense_id)
            )
            return cursor.fetchone()
        finally:
            conn.close()

    @staticmethod
    def get_all(user_id):
        conn = get_connection()
        try:
            cursor = conn.cursor(dictionary=True)
            cursor.execute(
                'SELECT * FROM expenses '
                'WHERE user_id=%s '
                'ORDER BY spent_at DESC, expense_id DESC',
                (user_id,)
            )
            return cursor.fetchall()
        finally:
            conn.close()

    @staticmethod
    def summary(user_id, year=None, month=None):
        conn = get_connection()
        try:
            cursor = conn.cursor(dictionary=True)

            sql = (
                'SELECT category, '
                'COUNT(*) AS count, '
                'SUM(amount) AS total '
                'FROM expenses '
                'WHERE user_id=%s '
            )
            params = [user_id]

            # תרגיל מסכם: הסינון לפי חודש נעשה ב-SQL
            if year and month:
                sql += 'AND YEAR(spent_at)=%s AND MONTH(spent_at)=%s '
                params += [year, month]

            sql += 'GROUP BY category ORDER BY total DESC'

            cursor.execute(sql, params)
            return cursor.fetchall()
        finally:
            conn.close()

    @staticmethod
    def delete(user_id, expense_id):
        conn = get_connection()
        try:
            cursor = conn.cursor()
            cursor.execute(
                'DELETE FROM expenses '
                'WHERE user_id=%s AND expense_id=%s',
                (user_id, expense_id)
            )
            conn.commit()
            # 0 = לא קיימת, או שייכת למשתמש אחר
            return cursor.rowcount
        finally:
            conn.close()
