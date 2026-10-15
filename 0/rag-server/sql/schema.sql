-- ============================================
-- Ask My Company - Schema
-- מריצים את הקובץ הזה ב-SQL Editor של Neon
-- ============================================

-- שלב 1: הפעלת pgvector.
-- זה מוסיף ל-PostgreSQL טיפוס חדש בשם vector.
CREATE EXTENSION IF NOT EXISTS vector;


-- שלב 2: טבלת המסמכים.
-- שימו לב: שומרים גם את content וגם את embedding.
-- embedding משמש לחיפוש, content נשלח אחר כך ל-Gemini כ-Context.
DROP TABLE IF EXISTS documents;

CREATE TABLE documents (
    document_id SERIAL PRIMARY KEY,

    title VARCHAR(200)
        NOT NULL,

    content TEXT
        NOT NULL,

    -- 768 חייב להתאים ל-EMBEDDING_DIMENSIONS שב-.env
    embedding vector(768)
        NOT NULL,

    created_at TIMESTAMP
        NOT NULL
        DEFAULT CURRENT_TIMESTAMP
);


-- שלב 3 (לא חובה, מומלץ): Index לחיפוש מהיר.
-- בלי Index PostgreSQL סורק את כל השורות.
-- עם 12 מסמכים לא נרגיש הבדל, עם 100,000 כן.
-- vector_cosine_ops מתאים לאופרטור <=> שבו אנחנו משתמשים.
CREATE INDEX IF NOT EXISTS documents_embedding_idx
    ON documents
    USING hnsw (embedding vector_cosine_ops);


-- בדיקה ידנית אחרי הרצת ה-Seed:
-- SELECT document_id, title FROM documents ORDER BY document_id;
