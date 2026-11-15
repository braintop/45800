from flask import Blueprint
from controllers.task_controller import TaskController
from middleware.auth_middleware import check_token

task_bp = Blueprint('task', __name__)

task_bp.before_request(check_token)

task_bp.post('/ai')(TaskController.create_ai_task)
task_bp.get('/')(TaskController.get_all)






