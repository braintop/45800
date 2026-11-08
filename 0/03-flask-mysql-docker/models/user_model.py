from config.db import get_connection

class UserModel:
 
    @staticmethod
    def get_all():
        conn = get_connection()
        try:
            cursor = conn.cursor(dictionary=True)
            cursor.execute(
                'SELECT user_id, first_name, last_name, '
                'email, salary, department_id '
                'FROM users ORDER BY user_id'
            )
            return cursor.fetchall()
        except Exception as e:
            print(f"Error getting all users: {e}")
            return []
        finally:
            conn.close()
    
    @staticmethod
    def get_by_id(user_id):
        conn = get_connection()
        try:
            cursor = conn.cursor(dictionary=True)
            cursor.execute(
                'SELECT user_id, first_name, last_name, '
                'email, salary, department_id '
                'FROM users WHERE user_id=%s',
                (user_id,)
            )
            return cursor.fetchone()
        finally:
            conn.close()
    
    @staticmethod
    def create(data, password_hash):
        conn = get_connection()
        try:
            cursor = conn.cursor()
            cursor.execute(
                'INSERT INTO users '
                '(first_name,last_name,email,'
                'password,salary,department_id) '
                'VALUES (%s,%s,%s,%s,%s,%s)',
                (data['first_name'], data['last_name'],
                 data['email'], password_hash,
                 data['salary'], data.get('department_id'))
            )
            conn.commit()
            return cursor.lastrowid
        except Exception as e:
            print(f"Error creating user: {e}")
            return None
        finally:
            conn.close()

    @staticmethod
    def update(user_id, data):
        pass 
        # UPDATE users SET ... WHERE user_id=%s
        # conn.commit()
        # return cursor.rowcount
 
    @staticmethod
    def delete(user_id):
        pass 
        # DELETE FROM users WHERE user_id=%s
        # conn.commit()
        # return cursor.rowcount

    @staticmethod
    def get_by_email(email):
        conn = get_connection()
        try:
            cursor = conn.cursor(dictionary=True)
            cursor.execute(
                'SELECT user_id, first_name, '
                'last_name, email, password, '
                'role, salary, department_id '
                'FROM users WHERE email=%s',
                (email,)
            )
            return cursor.fetchone()
        finally:
            conn.close()
