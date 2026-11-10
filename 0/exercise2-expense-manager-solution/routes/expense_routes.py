from flask import Blueprint

from controllers.expense_controller import ExpenseController
from middleware.auth_middleware import check_token

expense_bp = Blueprint('expenses', __name__)

# שורה אחת, ומגינה על כל הקובץ
expense_bp.before_request(check_token)

expense_bp.post('/ai')(
    ExpenseController.create_ai_expense
)

expense_bp.get('/')(
    ExpenseController.get_all
)

expense_bp.get('/summary')(
    ExpenseController.summary
)

expense_bp.delete('/<int:expense_id>')(
    ExpenseController.delete
)
