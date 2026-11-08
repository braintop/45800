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


def check_token():
    """
    ===== הפונקציה המרכזית של השיעור =====

    היא רצה לפני כל בקשה לכתובות המוגנות.

    מתי היא עוצרת את הבקשה?
      כשהיא מחזירה תשובה עם קוד שגיאה.

    מתי היא ממשיכה?
      כשהיא לא מחזירה כלום.
    """

    # 1. מוציאים את הכותרת מהבקשה
    header = request.headers.get('Authorization')

    if not header:
        return jsonify({'error': 'Token is missing'}), 401

    # 2. הכותרת נראית כך:  Bearer eyJhbGci...
    #    לכן מפצלים לפי רווח ולוקחים את החלק השני
    parts = header.split(' ')

    if len(parts) != 2 or parts[0] != 'Bearer':
        return jsonify({'error': 'Token is missing'}), 401

    token = parts[1]

    # 3. מאמתים את החתימה
    try:
        payload = jwt.decode(
            token,
            get_secret(),
            algorithms=['HS256']
        )

    except jwt.ExpiredSignatureError:
        return jsonify({'error': 'Token has expired'}), 401

    except jwt.InvalidTokenError:
        return jsonify({'error': 'Invalid token'}), 401

    # 4. שומרים את המשתמש לשאר הבקשה.
    #    g הוא המקביל ל-req.user ב-Node.
    g.current_user = payload

    # 5. אין return.
    #    לכן Flask ממשיך לפונקציה האמיתית.


def is_admin():
    """
    בדיקת הרשאה פשוטה.
    קוראים לה מתוך Controller כשצריך.
    """
    user = getattr(g, 'current_user', None)

    if not user:
        return False

    return user.get('role') == 'admin'
