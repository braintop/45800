USE store_db;

CREATE TABLE IF NOT EXISTS categories (
  category_id INT AUTO_INCREMENT PRIMARY KEY,
  category_name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS products (
  product_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  quantity INT NOT NULL DEFAULT 0,
  category_id INT NOT NULL,

  FOREIGN KEY (category_id)
    REFERENCES categories(category_id)
);

INSERT IGNORE INTO categories
  (category_id, category_name)
VALUES
  (1, 'Computers'),
  (2, 'Phones'),
  (3, 'Accessories');

INSERT IGNORE INTO products
  (product_id, name, price, quantity, category_id)
VALUES
  (1, 'Laptop Lenovo', 3200.00, 5, 1),
  (2, 'iPhone 16', 3900.00, 8, 2),
  (3, 'Wireless Mouse', 89.90, 30, 3);
