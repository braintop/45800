from flask import Blueprint

from controllers.user_controller import UserController

user_bp = Blueprint('users', __name__)

# פתוחות בהכרח: אי אפשר לדרוש טוקן
# ממי שעדיין אין לו.
user_bp.post('/register')(UserController.register)
user_bp.post('/login')(UserController.login)
