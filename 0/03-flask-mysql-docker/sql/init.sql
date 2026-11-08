USE school_db;
 
CREATE TABLE IF NOT EXISTS departments (
  department_id INT AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(100) NOT NULL UNIQUE
);
CREATE TABLE IF NOT EXISTS users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  role VARCHAR(20) NOT NULL DEFAULT 'user',
  password VARCHAR(255) NOT NULL,
  salary DECIMAL(10,2) NOT NULL DEFAULT 0,
  department_id INT NULL,
 
  FOREIGN KEY (department_id)
    REFERENCES departments(department_id)
    ON DELETE SET NULL
);

INSERT IGNORE INTO departments
  (department_id, department_name)
VALUES
  (1, 'Development'),
  (2, 'Sales'),
  (3, 'Support');



