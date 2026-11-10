from config.db import get_connection

PRODUCT_COLUMNS = 'product_id, name, price, quantity, category_id'

def _to_json_row(row):
    # MySQL returns DECIMAL as Decimal, convert it to a regular number for JSON
    if row and row.get('price') is not None:
        row['price'] = float(row['price'])
    return row

class ProductModel:

    @staticmethod
    def get_all():
        conn = get_connection()
        try:
            cursor = conn.cursor(dictionary=True)
            cursor.execute(
                f'SELECT {PRODUCT_COLUMNS} '
                'FROM products ORDER BY product_id'
            )
            return [_to_json_row(row) for row in cursor.fetchall()]
        except Exception as e:
            print(f"Error getting all products: {e}")
            return []
        finally:
            conn.close()

    @staticmethod
    def get_by_id(product_id):
        conn = get_connection()
        try:
            cursor = conn.cursor(dictionary=True)
            cursor.execute(
                f'SELECT {PRODUCT_COLUMNS} '
                'FROM products WHERE product_id=%s',
                (product_id,)
            )
            return _to_json_row(cursor.fetchone())
        finally:
            conn.close()

    @staticmethod
    def create(data):
        conn = get_connection()
        try:
            cursor = conn.cursor()
            cursor.execute(
                'INSERT INTO products '
                '(name, price, quantity, category_id) '
                'VALUES (%s, %s, %s, %s)',
                (data['name'], data['price'],
                 data['quantity'], data['category_id'])
            )
            conn.commit()
            return cursor.lastrowid
        except Exception as e:
            print(f"Error creating product: {e}")
            return None
        finally:
            conn.close()

    @staticmethod
    def update(product_id, data):
        conn = get_connection()
        try:
            cursor = conn.cursor()
            cursor.execute(
                'UPDATE products '
                'SET name=%s, price=%s, quantity=%s, category_id=%s '
                'WHERE product_id=%s',
                (data['name'], data['price'],
                 data['quantity'], data['category_id'],
                 product_id)
            )
            conn.commit()
            return True
        except Exception as e:
            print(f"Error updating product: {e}")
            return False
        finally:
            conn.close()

    @staticmethod
    def delete(product_id):
        conn = get_connection()
        try:
            cursor = conn.cursor()
            cursor.execute(
                'DELETE FROM products WHERE product_id=%s',
                (product_id,)
            )
            conn.commit()
            return cursor.rowcount
        except Exception as e:
            print(f"Error deleting product: {e}")
            return None
        finally:
            conn.close()
