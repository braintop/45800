from config.db import get_connection
 
class DepartmentModel:
 
    @staticmethod
    def get_all():
        conn = get_connection()
        try:
            cursor = conn.cursor(dictionary=True)
            cursor.execute(
                'SELECT department_id, department_name '
                'FROM departments ORDER BY department_id'
            )
            return cursor.fetchall()
        except Exception as e:
            print(f"Error getting all departments: {e}")
            return []
        finally:
            conn.close()

    @staticmethod
    def get_by_id(department_id):
        conn = get_connection()
        try:
            cursor = conn.cursor(dictionary=True)
            cursor.execute(
                'SELECT department_id, department_name '
                'FROM departments WHERE department_id=%s',
                (department_id,)
            )
            return cursor.fetchone()
        finally:
            conn.close()

    @staticmethod
    def create(department_name):
        conn = get_connection()
        try:
            cursor = conn.cursor()
            cursor.execute(
                'INSERT INTO departments (department_name) '
                'VALUES (%s)',
                (department_name,)
            )
            conn.commit()
            return cursor.lastrowid
        except Exception as e:
            print(f"Error creating department: {e}")
            return None
        finally:
            conn.close()
