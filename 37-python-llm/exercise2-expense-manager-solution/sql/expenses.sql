USE school_db;

CREATE TABLE IF NOT EXISTS expenses (
    expense_id INT AUTO_INCREMENT PRIMARY KEY,

    description VARCHAR(200) NOT NULL,

    amount DECIMAL(10,2) NOT NULL,

    category VARCHAR(50) NOT NULL,

    payment_method VARCHAR(30) NOT NULL,

    spent_at DATE NOT NULL,

    created_at TIMESTAMP NOT NULL
        DEFAULT CURRENT_TIMESTAMP,

    user_id INT NOT NULL,

    FOREIGN KEY (user_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE
);

CREATE INDEX expenses_user_idx
    ON expenses (user_id);
