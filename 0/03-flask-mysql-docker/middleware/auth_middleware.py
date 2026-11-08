import os
import jwt
 
from datetime import (
    datetime, timedelta, timezone
)
from flask import request, jsonify, g
 
 
def get_secret():
    secret = os.getenv('JWT_SECRET')
 
    if not secret:
        raise RuntimeError(
            'JWT_SECRET is not set'
        )
 
    return secret

def create_token(user):
 
    hours = int(
        os.getenv('JWT_EXPIRES_HOURS', '8')
    )
 
    payload = {
        'user_id': user['user_id'],
        'email': user['email'],
        'role': user.get('role', 'user'),
 
        'exp': datetime.now(timezone.utc)
               + timedelta(hours=hours),
 
        'iat': datetime.now(timezone.utc),
    }
 
    return jwt.encode(
        payload,
        get_secret(),
        algorithm='HS256'
    )
