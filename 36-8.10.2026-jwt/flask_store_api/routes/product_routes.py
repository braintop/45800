from flask import Blueprint
from controllers.product_controller import ProductController

product_bp = Blueprint('products', __name__)

product_bp.get('/products')(ProductController.get_products)
product_bp.get('/products/<int:product_id>')(ProductController.get_product)
product_bp.post('/products')(ProductController.add_product)
product_bp.put('/products/<int:product_id>')(ProductController.update_product)
product_bp.delete('/products/<int:product_id>')(ProductController.delete_product)
