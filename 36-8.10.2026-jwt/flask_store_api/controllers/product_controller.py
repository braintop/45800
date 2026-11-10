from flask import jsonify, request
from models.product_model import ProductModel
from models.category_model import CategoryModel

def validate_product(data):
    """Returns (clean_data, error). If error is not None, the input is invalid."""
    name = str(data.get('name', '')).strip()
    if not name:
        return None, 'name is required'

    price = data.get('price')
    # bool is a subclass of int in Python, so True would pass as 1
    if isinstance(price, bool) or not isinstance(price, (int, float)) or price <= 0:
        return None, 'price must be a number greater than 0'

    quantity = data.get('quantity')
    if isinstance(quantity, bool) or not isinstance(quantity, int) or quantity < 0:
        return None, 'quantity must be a whole number, 0 or more'

    category_id = data.get('category_id')
    if isinstance(category_id, bool) or not isinstance(category_id, int):
        return None, 'category_id must be a whole number'
    if not CategoryModel.get_by_id(category_id):
        return None, 'category_id does not exist'

    return {
        'name': name,
        'price': price,
        'quantity': quantity,
        'category_id': category_id,
    }, None


class ProductController:

    @staticmethod
    def get_products():
        return jsonify(ProductModel.get_all())

    @staticmethod
    def get_product(product_id):
        product = ProductModel.get_by_id(product_id)

        if not product:
            return jsonify({'error': 'Product not found'}), 404

        return jsonify(product)

    @staticmethod
    def add_product():
        data = request.get_json(silent=True) or {}

        product, error = validate_product(data)
        if error:
            return jsonify({'error': error}), 400

        new_id = ProductModel.create(product)
        if new_id is None:
            return jsonify({'error': 'Could not create product'}), 500

        return jsonify(ProductModel.get_by_id(new_id)), 201

    @staticmethod
    def update_product(product_id):
        if not ProductModel.get_by_id(product_id):
            return jsonify({'error': 'Product not found'}), 404

        data = request.get_json(silent=True) or {}

        product, error = validate_product(data)
        if error:
            return jsonify({'error': error}), 400

        if not ProductModel.update(product_id, product):
            return jsonify({'error': 'Could not update product'}), 500

        return jsonify(ProductModel.get_by_id(product_id))

    @staticmethod
    def delete_product(product_id):
        deleted = ProductModel.delete(product_id)

        if deleted is None:
            return jsonify({'error': 'Could not delete product'}), 500
        if deleted == 0:
            return jsonify({'error': 'Product not found'}), 404

        return jsonify({'message': 'Product deleted'})
