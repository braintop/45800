from flask import Blueprint
from controllers.category_controller import CategoryController

category_bp = Blueprint('categories', __name__)

category_bp.get('/categories')(CategoryController.get_categories)
category_bp.get('/categories/<int:category_id>')(CategoryController.get_category)
