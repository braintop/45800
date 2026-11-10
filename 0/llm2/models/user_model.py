from config.db import get_connection


class UserModel:

    # השגיאות לא נתפסות כאן אלא ב-Controller.
    # כך הוא יודע להחזיר 409 כשהאימייל כבר קיים.

    @staticmethod
    def create(user_name, email, password):
        connection = get_connection()
        try:
            cursor = connection.cursor()
            cursor.execute(
                "INSERT INTO users (user_name, email, password) VALUES (%s, %s, %s)",
                (user_name, email, password)
            )
            connection.commit()
            new_id = cursor.lastrowid
            cursor.close()
            return new_id
        finally:
            connection.close()

    @staticmethod
    def get_by_email(email):
        connection = get_connection()
        try:
            # dictionary=True: כל שורה חוזרת כמילון,
            # ואז אפשר לכתוב user['password']
            cursor = connection.cursor(dictionary=True)
            cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
            return cursor.fetchone()
        finally:
            connection.close()

    @staticmethod
    def get_by_id(user_id):
        connection = get_connection()
        try:
            # בלי password, כי את זה מחזירים ללקוח
            cursor = connection.cursor(dictionary=True)
            cursor.execute(
                "SELECT user_id, user_name, email, role FROM users WHERE user_id = %s",
                (user_id,)
            )
            return cursor.fetchone()
        finally:
            connection.close()
