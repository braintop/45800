from flask import Blueprint
from controllers.user_controller import UserController
from middleware.auth_middleware import check_token



user_bp = Blueprint('users', __name__)

# ============================================
# שורה אחת, והיא מגינה על כל הקובץ.
#
# check_token ירוץ לפני כל בקשה לכתובות שלמטה.
# אם אין טוקן תקין, הבקשה נעצרת שם ולא מגיעה הנה.
# ============================================

user_bp.before_request(check_token)

user_bp.get('/users')(UserController.all)
user_bp.get('/users/<int:user_id>')(UserController.one)
user_bp.post('/users')(UserController.create)
# user_bp.put('/users/<int:user_id>')(UserController.update)
# user_bp.delete('/users/<int:user_id>')(UserController.delete)
