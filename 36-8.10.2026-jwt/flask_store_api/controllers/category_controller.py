from flask import jsonify
from models.category_model import CategoryModel

class CategoryController:

    @staticmethod
    def get_categories():
        return jsonify(CategoryModel.get_all())

    @staticmethod
    def get_category(category_id):
        category = CategoryModel.get_by_id(category_id)

        if not category:
            return jsonify(
                {'error': 'Category not found'}
            ), 404

        return jsonify(category)
