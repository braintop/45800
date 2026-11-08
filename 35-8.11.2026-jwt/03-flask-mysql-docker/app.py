import os
from flask import Flask, jsonify
from flask_cors import CORS

from routes.auth_routes import auth_bp

from routes.user_routes import user_bp
from routes.department_routes import department_bp
 
app = Flask(__name__)
CORS(app)
 
app.register_blueprint(auth_bp, url_prefix='/api')
app.register_blueprint(user_bp, url_prefix='/api')
app.register_blueprint(department_bp, url_prefix='/api')
 
 
if __name__ == '__main__':
    app.run(
        port=int(os.getenv('PORT', '5000')),
        debug=True
    )
