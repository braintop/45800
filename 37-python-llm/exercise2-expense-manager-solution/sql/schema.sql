-- ============================================
-- AI Task Manager, גרסת MySQL
--
-- המקור ב-Node עובד מול PostgreSQL ב-Neon.
-- כאן אנחנו עובדים מול MySQL בקונטיינר,
-- כי זה מה שכבר רץ אצלכם.
--
-- ההבדלים: SERIAL הופך ל-AUTO_INCREMENT,
-- ו-BOOLEAN נשמר כ-TINYINT מאחורי הקלעים.
-- ============================================

USE school_db;

CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL DEFAULT 'user'
);

DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks (
    task_id INT AUTO_INCREMENT PRIMARY KEY,

    title VARCHAR(200) NOT NULL,

    priority VARCHAR(20) NOT NULL,

    category VARCHAR(50) NOT NULL,

    completed BOOLEAN NOT NULL DEFAULT FALSE,

    created_at TIMESTAMP NOT NULL
        DEFAULT CURRENT_TIMESTAMP,

    user_id INT NOT NULL,

    FOREIGN KEY (user_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE
);

CREATE INDEX tasks_user_idx ON tasks (user_id);
