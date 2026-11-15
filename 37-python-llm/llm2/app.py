import os

from dotenv import load_dotenv

# חייב לרוץ לפני הייבואים שמתחתיו,
# כי הם קוראים משתני סביבה בזמן הטעינה.
load_dotenv()

from flask import Flask, jsonify
from flask_cors import CORS

from routes.chat_routes import chat_bp
from routes.task_routes import task_bp
from routes.user_routes import user_bp

app = Flask(__name__)

CORS(app)

app.register_blueprint(chat_bp, url_prefix='/api')
app.register_blueprint(task_bp, url_prefix='/api')
app.register_blueprint(user_bp, url_prefix='/api')


@app.get('/')
def home():
    return jsonify(
        {'message': 'AI Task Manager API is running'}
    )


if __name__ == '__main__':
    app.run(
        port=int(os.getenv('PORT', '5002')),
        debug=True
    )
