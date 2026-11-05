import os
from flask import Flask, jsonify
from flask_cors import CORS
 
from routes.user_routes import user_bp
from routes.department_routes import department_bp
 
app = Flask(__name__)
CORS(app)
 
app.register_blueprint(user_bp, url_prefix='/api')
app.register_blueprint(department_bp, url_prefix='/api')
 
@app.get('/')
def home():
    return jsonify(
        {'message': 'Python + MySQL API is running'}
    )
 
if __name__ == '__main__':
    app.run(
        port=int(os.getenv('PORT', '5000')),
        debug=True
    )
