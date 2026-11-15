from flask import jsonify, request

from werkzeug.security import (
    generate_password_hash,
    check_password_hash
)
from mysql.connector import IntegrityError

from models.user_model import UserModel
from middleware.auth_middleware import create_token


class UserController:

    @staticmethod
    def register():
        try:
            data = request.get_json(silent=True) or {}

            user_name = data.get('user_name')
            email = data.get('email')
            password = data.get('password')

            if not user_name or not email or not password:
                return jsonify({
                    'error':
                        'user_name, email and password are required'
                }), 400

            new_id = UserModel.create(
                user_name,
                email,
                generate_password_hash(str(password))
            )

            return jsonify(
                UserModel.get_by_id(new_id)
            ), 201

        except IntegrityError:
            return jsonify(
                {'error': 'Email already exists'}
            ), 409

        except Exception as error:
            print(error)
            return jsonify(
                {'error': 'Failed to register'}
            ), 500

    @staticmethod
    def login():
        try:
            data = request.get_json(silent=True) or {}

            email = data.get('email')
            password = data.get('password')

            if not email or not password:
                return jsonify(
                    {'error': 'email and password are required'}
                ), 400

            user = UserModel.get_by_email(email)

            # אותה הודעה בשני המקרים,
            # כדי לא לגלות אילו כתובות רשומות אצלנו.
            if not user:
                return jsonify(
                    {'error': 'Invalid email or password'}
                ), 401

            if not check_password_hash(
                user['password'], str(password)
            ):
                return jsonify(
                    {'error': 'Invalid email or password'}
                ), 401

            token = create_token(user)

            user.pop('password', None)

            return jsonify({
                'token': token,
                'user': user
            })

        except Exception as error:
            print(error)
            return jsonify(
                {'error': 'Failed to login'}
            ), 500
