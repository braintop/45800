from flask import Flask, jsonify
from flask_cors import CORS

from routes.product_routes import product_bp
from routes.category_routes import category_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(product_bp, url_prefix='/api')
app.register_blueprint(category_bp, url_prefix='/api')


@app.get('/')
def home():
    return jsonify({'message': 'Welcome to Store API'})


if __name__ == '__main__':
    app.run(debug=True, port=5050)
