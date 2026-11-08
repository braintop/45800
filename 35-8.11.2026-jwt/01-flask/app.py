from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/')
def index():
    return jsonify({"message": "Hello, World!"})

@app.route('/about')
def about():
    return jsonify({"message": "About page"})

# /multiply?x=4&y=6
@app.route('/multiply')
def multiply():
    x = int(request.args.get('x'))
    y = int(request.args.get('y'))
    return jsonify({"message": x * y})

@app.route('/add/<int:x>/<int:y>')
def add(x, y):
    return jsonify({"message": x + y})

if __name__ == '__main__':
    app.run(debug=True, port=5001)