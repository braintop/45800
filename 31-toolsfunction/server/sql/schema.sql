-- ============================================
-- Tools + Function Calling
-- מריצים ב-SQL Editor של Neon
-- ============================================

CREATE EXTENSION IF NOT EXISTS vector;

DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS documents;
DROP TABLE IF EXISTS users;


-- משתמשים. מכאן מגיע ה-user_id שב-Token.
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);


-- המסמכים של החברה, לכלי search_documents
CREATE TABLE documents (
    document_id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    content TEXT NOT NULL,
    embedding vector(768) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX documents_embedding_idx
    ON documents
    USING hnsw (embedding vector_cosine_ops);


-- המשימות, לכלים create_task ו-list_tasks.
-- שימו לב ל-user_id ול-FOREIGN KEY:
-- זו ההפרדה בין משתמשים, והיא במסד ולא בפרומפט.
CREATE TABLE tasks (
    task_id SERIAL PRIMARY KEY,

    user_id INTEGER NOT NULL,

    title VARCHAR(200) NOT NULL,

    priority VARCHAR(20) NOT NULL,

    completed BOOLEAN NOT NULL DEFAULT FALSE,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE
);

CREATE INDEX tasks_user_idx ON tasks (user_id);
