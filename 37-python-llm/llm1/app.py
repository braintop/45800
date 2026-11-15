import os

from dotenv import load_dotenv

load_dotenv()

from flask import Flask, jsonify
from flask_cors import CORS

from routes.chat_routes import chat_bp

app = Flask(__name__)

CORS(app)

app.register_blueprint(chat_bp, url_prefix='/api')


@app.route('/')
def index():
    return jsonify({'message': 'Python LLM server is running'})


if __name__ == '__main__':
    app.run(
        debug=True,
        port=int(os.getenv('PORT', 5002))
    )
