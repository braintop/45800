
from flask import Flask, jsonify, request
app = Flask(__name__)
# רשימת מוצרים
products = [
    {"id": 1, "name": "Laptop", "price": 3000},
    {"id": 2, "name": "Mouse", "price": 100}
]
# GET - הצגת כל המוצרים
@app.route('/products', methods=['GET'])
def get_products():
    return jsonify(products), 200

# POST - הוספת מוצר
@app.route('/products', methods=['POST'])
def add_product():

    # קבלת JSON מהלקוח
    data = request.get_json(silent=True)

    # בדיקה שהתקבל JSON תקין
    if not isinstance(data, dict):
        return jsonify({"error": "Invalid JSON"}), 400

    # בדיקת שדות חובה
    if "name" not in data or "price" not in data:
        return jsonify({"error": "Name and price are required"}), 400

    name = data["name"]
    price = data["price"]

    # ולידציה
    if not isinstance(name, str) or not name.strip():
        return jsonify({"error": "Invalid name"}), 400

    if type(price) not in (int, float) or price <= 0:
        return jsonify({"error": "Invalid price"}), 400

    # יצירת מוצר חדש
    new_product = {
        "id": len(products) + 1,
        "name": name.strip(),
        "price": price
    }

    # הוספה למערך
    products.append(new_product)

    # החזרת המוצר שנוצר
    return jsonify(new_product), 201


if __name__ == '__main__':
    app.run(debug=True, port=5050)
