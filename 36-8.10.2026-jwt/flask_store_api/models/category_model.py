from config.db import get_connection

class CategoryModel:

    @staticmethod
    def get_all():
        conn = get_connection()
        try:
            cursor = conn.cursor(dictionary=True)
            cursor.execute(
                'SELECT category_id, category_name '
                'FROM categories ORDER BY category_id'
            )
            return cursor.fetchall()
        except Exception as e:
            print(f"Error getting all categories: {e}")
            return []
        finally:
            conn.close()

    @staticmethod
    def get_by_id(category_id):
        conn = get_connection()
        try:
            cursor = conn.cursor(dictionary=True)
            cursor.execute(
                'SELECT category_id, category_name '
                'FROM categories WHERE category_id=%s',
                (category_id,)
            )
            return cursor.fetchone()
        finally:
            conn.close()
