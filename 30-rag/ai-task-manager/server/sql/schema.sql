-- מריצים את הקובץ הזה ב-SQL Editor של Neon

-- טבלת המשתמשים (חלק 20)
CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL DEFAULT 'user'
);

-- טבלת המשימות, הגרסה המשופרת (חלק 45)
DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks (
    task_id SERIAL PRIMARY KEY,

    title VARCHAR(200)
        NOT NULL,

    priority VARCHAR(20)
        NOT NULL,

    category VARCHAR(50)
        NOT NULL,

    completed BOOLEAN
        NOT NULL
        DEFAULT FALSE,

    created_at TIMESTAMP
        NOT NULL
        DEFAULT CURRENT_TIMESTAMP,

    user_id INTEGER
        NOT NULL,

    FOREIGN KEY (user_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE
);
