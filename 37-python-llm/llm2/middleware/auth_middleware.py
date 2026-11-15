import os
import jwt

from datetime import datetime, timedelta, timezone
from flask import request, jsonify, g

# ============================================
# Middleware: קוד שרץ לפני הפונקציה
# שמטפלת בבקשה, ויכול לעצור אותה.
#
# הכלל:
#   מחזירה משהו   -> הבקשה נעצרת
#   לא מחזירה כלום -> ממשיכים
# ============================================


def get_secret():
    secret = os.getenv('JWT_SECRET')

    if not secret:
        raise RuntimeError('JWT_SECRET is not set')

    return secret


def create_token(user):
    hours = int(os.getenv('JWT_EXPIRES_HOURS', '8'))

    payload = {
        'user_id': user['user_id'],
        'email': user['email'],
        'role': user.get('role', 'user'),
        'exp': datetime.now(timezone.utc) + timedelta(hours=hours),
        'iat': datetime.now(timezone.utc),
    }

    return jwt.encode(payload, get_secret(), algorithm='HS256')


def check_token():
    header = request.headers.get('Authorization')

    if not header:
        return jsonify({'error': 'Token is missing'}), 401

    parts = header.split(' ')

    if len(parts) != 2 or parts[0] != 'Bearer':
        return jsonify({'error': 'Token is missing'}), 401

    try:
        payload = jwt.decode(
            parts[1],
            get_secret(),
            algorithms=['HS256']
        )

    except jwt.ExpiredSignatureError:
        return jsonify({'error': 'Token has expired'}), 401

    except jwt.InvalidTokenError:
        return jsonify({'error': 'Invalid token'}), 401

    g.current_user = payload
    # אין return, ולכן ממשיכים
