# AI Task Manager

הפרויקט המלא של שיעור 2: Structured Output + Database.
המשתמש כותב משימה בשפה טבעית, Gemini מחלץ ממנה JSON מובנה, ו-Node שומר אותה ב-PostgreSQL (Neon) עבור המשתמש המחובר בלבד.

## מבנה

```text
ai-task-manager
│
├── server    Node.js + Express + TypeScript + Gemini + Neon + JWT
└── client    React (Vite) עם AITaskForm ו-TaskList
```

## הקמה, צעד אחר צעד

### 1. מסד הנתונים (Neon)

1. היכנסו ל-Neon ופתחו SQL Editor.
2. הריצו את הקובץ `server/sql/schema.sql` (יוצר את users ואת tasks בגרסה המשופרת מחלק 45).
3. העתיקו את ה-Connection string של המסד.

### 2. השרת

```bash
cd server
npm install
cp .env.example .env
```

מלאו בקובץ `.env`:

- `GEMINI_API_KEY` מ-Google AI Studio
- `DATABASE_URL` מ-Neon
- `JWT_SECRET` מחרוזת אקראית ארוכה

והריצו:

```bash
npm run dev
```

אמור להופיע: `Server is running on port 3000`

### 3. יצירת משתמש ראשון

אין עדיין משתמשים במסד, אז ניצור אחד (ב-Postman או ב-curl):

```bash
curl -X POST http://localhost:3000/users/register -H "Content-Type: application/json" -d '{"user_name":"Dana","email":"dana@gmail.com","password":"123456"}'
```

### 4. הלקוח

בטרמינל נפרד:

```bash
cd client
npm install
npm run dev
```

נפתח בדפדפן (בדרך כלל http://localhost:5173), מתחברים עם המשתמש שיצרנו, וכותבים משימה בשפה חופשית. למשל:

```text
I need to finish my React project urgently
```

## נקודות מהשיעור שמומשו כאן

- `extractTask` עם `responseSchema`, ‏enums ו-System Instruction עם Business Rules (חלקים 9 ו-41)
- `authMiddleware` מלא, וכל ה-Routes של tasks מוגנים (חלקים 21-22)
- `user_id` מגיע אך ורק מה-JWT, לעולם לא מה-React (כלל האבטחה של חלק 23)
- `isValidTask` והולידציה בצד השרת (חלקים 31-33)
- הטבלה המשופרת עם completed, ‏created_at ו-Foreign Key עם ON DELETE CASCADE (חלק 45)
- כפתור Refresh Tasks ברשימה (הפתרון הפשוט מחלק 30)

## הערה

הקבצים `userController.ts`, ‏`userRoutes.ts` ו-`LoginForm.tsx` אינם חלק מחומר שיעור 2 עצמו. השיעור מניח שמערכת Users קיימת מקורס קודם, והם כלולים כאן כדי שהפרויקט ירוץ מקצה לקצה.
