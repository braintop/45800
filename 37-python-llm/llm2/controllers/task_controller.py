from flask import jsonify, request, g 

from models.task_model import TaskModel
from services.llm_service import extract_task


PRIORITIES = ['low', 'medium', 'high']
CATEGORIES = ['study', 'work', 'personal', 'other']

def is_valid_task(task):
    """
    המודל הבטיח לנו סכמה. אנחנו בכל זאת בודקים.

    למה? כי פלט של מודל הוא קלט חיצוני,
    בדיוק כמו טופס שמשתמש ממלא.
    """
    if not isinstance(task, dict):
        return False

    title = task.get('title')

    return (
        isinstance(title, str)
        and len(title.strip()) > 0
        and task.get('priority') in PRIORITIES
        and task.get('category') in CATEGORIES
    )

class TaskController:

    @staticmethod
    def create_ai_task():
        try:
            data = request.get_json(silent=True) or {}
            message = data.get('message')

            if not message:
                return jsonify({'error': 'Message is required'}), 400

            user_id = g.current_user['user_id']
            task_data = extract_task(message)

            # קודם בודקים, ורק אחר כך שומרים במסד
            if not is_valid_task(task_data):
                return jsonify({'error': 'Invalid task'}), 400

            task_data['completed'] = False
            task_data['user_id'] = user_id

            new_id = TaskModel.create_task(task_data)

            return jsonify(
                TaskModel.get_task_by_id(user_id, new_id)
            ), 201

        except Exception as error:
            print(error)
            return jsonify({'error': 'Failed to create task'}), 500

    @staticmethod
    def get_all():
        try:
            user_id = g.current_user['user_id']
            return jsonify(TaskModel.get_all_tasks(user_id))

        except Exception as error:
            print(error)
            return jsonify({'error': 'Failed to get tasks'}), 500
