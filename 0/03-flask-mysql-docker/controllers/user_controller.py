from flask import jsonify, request
from werkzeug.security import generate_password_hash
from mysql.connector import IntegrityError
from models.user_model import UserModel

class UserController:
    @staticmethod
    def all():
        return jsonify(UserModel.get_all())

    @staticmethod
    def one(user_id):
        user = UserModel.get_by_id(user_id)
        if not user:
            return jsonify({'error': 'User not found'}), 404
        return jsonify(user)

    @staticmethod
    def create():
        data = request.get_json(silent=True) or {}
        required = ['first_name','last_name','email','password','salary']
        if any(key not in data or data[key] in (None, '') for key in required):
            return jsonify({'error': 'Missing required fields'}), 400
        try:
            salary = float(data['salary'])
            if salary < 0: raise ValueError()
            data['salary'] = salary
            new_id = UserModel.create(data, generate_password_hash(str(data['password'])))
            return jsonify(UserModel.get_by_id(new_id)), 201
        except (ValueError, TypeError):
            return jsonify({'error': 'Invalid salary'}), 400
        except IntegrityError:
            return jsonify({'error': 'Email already exists or invalid department'}), 409

    @staticmethod
    def update(user_id):
        if not UserModel.get_by_id(user_id):
            return jsonify({'error': 'User not found'}), 404
        data = request.get_json(silent=True) or {}
        required = ['first_name','last_name','email','salary']
        if any(key not in data or data[key] in (None, '') for key in required):
            return jsonify({'error': 'Missing required fields'}), 400
        try:
            data['salary'] = float(data['salary'])
            if data['salary'] < 0: raise ValueError()
            UserModel.update(user_id, data)
            return jsonify(UserModel.get_by_id(user_id))
        except (ValueError, TypeError):
            return jsonify({'error': 'Invalid salary'}), 400
        except IntegrityError:
            return jsonify({'error': 'Email already exists or invalid department'}), 409

    @staticmethod
    def delete(user_id):
        if not UserModel.delete(user_id):
            return jsonify({'error': 'User not found'}), 404
        return jsonify({'message': 'User deleted'})

