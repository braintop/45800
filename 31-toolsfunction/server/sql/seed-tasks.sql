-- ============================================
-- משימות להדגמה, ישירות ב-SQL
--
-- מתי להשתמש בקובץ הזה:
-- כשרוצים לאפס משימות במהירות בלי להריץ Node.
--
-- מתי לא:
-- למסמכים. אי אפשר להכניס אותם כך,
-- כי עמודת embedding היא NOT NULL
-- ורק Gemini יכול לייצר אותה.
-- לשם כך יש: npm run seed
-- ============================================


-- שלב 1: מוצאים את המזהה של המשתמש
SELECT user_id, user_name, email FROM users ORDER BY user_id;


-- שלב 2: מחליפים את 1 במספר שקיבלתם, ומריצים

DELETE FROM tasks WHERE user_id = 1;

INSERT INTO tasks (user_id, title, priority, completed) VALUES
  (1, 'Finish the quarterly report',                'high',   FALSE),
  (1, 'Call the supplier about the delayed shipment','high',   FALSE),
  (1, 'Update the FAQ page',                        'medium', FALSE),
  (1, 'Review the new refund policy draft',         'medium', FALSE),
  (1, 'Buy milk',                                   'low',    FALSE),
  (1, 'לתאם פגישה עם רואה החשבון',                  'medium', FALSE),
  (1, 'להזמין מחשב נייד חדש לעובד החדש',            'high',   FALSE),
  (1, 'Order office supplies',                      'low',    TRUE),
  (1, 'Send the invoice to the accountant',         'medium', TRUE),
  (1, 'Book the meeting room for Thursday',         'low',    TRUE);


-- שלב 3: בדיקה
SELECT
    task_id,
    title,
    priority,
    completed
FROM tasks
WHERE user_id = 1
ORDER BY completed, task_id;


-- ============================================
-- ספירה כללית של כל הטבלאות
-- ============================================
SELECT 'users'     AS table_name, COUNT(*) AS rows FROM users
UNION ALL
SELECT 'documents', COUNT(*) FROM documents
UNION ALL
SELECT 'tasks',     COUNT(*) FROM tasks;
