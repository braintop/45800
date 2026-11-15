# server_presentaion_2 · Tasks API עם Neon

השרת למפגש 2 (Webhooks). זה בדיוק מה שהשקפים מצפים לו:

| שירות | כתובת מהמחשב | כתובת מתוך n8n |
|---|---|---|
| האתר (client) | http://localhost:8080 | — |
| ה-API (api) | http://localhost:3000/api/tasks | **http://api:3000/api/tasks** |
| n8n | http://localhost:5678 | — |
| מסד הנתונים | Neon (בענן) | — |

ההבדל היחיד מהשקפים: אין service בשם `mongo`. מסד הנתונים הוא Neon, PostgreSQL בענן.

---

## הקמה (פעם אחת)

### 1. יוצרים פרויקט ב-Neon
1. נכנסים ל-https://console.neon.tech ויוצרים פרויקט חדש.
2. לוחצים **Connect** ומעתיקים את ה-connection string. הוא נראה כך:
   `postgresql://USER:PASSWORD@ep-xxxx-pooler.REGION.aws.neon.tech/neondb?sslmode=require`

### 2. יוצרים את הטבלה (לא חובה)
ב-Neon: **SQL Editor**, מדביקים את התוכן של `db/schema.sql` ולוחצים **Run**.
- השרת יוצר את הטבלה לבד בהפעלה הראשונה, אם היא חסרה. כך שהשלב הזה הוא רק למי שרוצה לראות אותה מראש.
- רוצים משימות לדוגמה? מריצים גם את `db/seed.sql`.

### 3. קובץ ‎.env
```bash
cp .env.example .env
```
פותחים את `.env` ומדביקים את ה-connection string ב-`DATABASE_URL`.
> הקובץ `.env` מכיל סיסמה. לא מעלים אותו ל-GitHub (הוא כבר ב-`.gitignore`).

### 4. מריצים
אם n8n ממפגש 1 עדיין רץ, עוצרים אותו קודם (בתיקייה שלו: `docker compose down`), כי שניהם על פורט 5678.
```bash
docker compose up -d --build
```
בודקים:
```bash
docker compose ps
curl http://localhost:3000/health
```
צריך לחזור `{"ok":true,"db":"connected"}`.

> n8n כאן משתמש ב-Volume חדש (`n8n-data` של הפרויקט הזה), ולכן בכניסה הראשונה ל-localhost:5678 יוצרים חשבון מחדש.

---

## ה-API

| פעולה | בקשה | Body | תשובה |
|---|---|---|---|
| כל המשימות | `GET /api/tasks` | — | 200, מערך |
| משימה אחת | `GET /api/tasks/:id` | — | 200 / 404 |
| יצירה | `POST /api/tasks` | `{ "title": "לקנות חלב" }` | 201 / 400 |
| עדכון | `PATCH /api/tasks/:id` | `{ "done": true }` ו/או `{ "title": "..." }` | 200 / 404 |
| מחיקה | `DELETE /api/tasks/:id` | — | 200 / 404 |
| בדיקת חיבור | `GET /health` | — | 200 |

כל משימה נראית כך (כמו בשקפים, עם `_id`):
```json
{ "_id": "c9bff7dc-e4da-4203-b713-da3df14b7b01", "title": "לקנות חלב", "done": false, "createdAt": "2026-11-14T15:45:00.687Z" }
```

### דוגמאות מהטרמינל
```bash
curl http://localhost:3000/api/tasks
curl -X POST http://localhost:3000/api/tasks -H "Content-Type: application/json" -d '{"title":"ללמוד n8n"}'
curl -X PATCH http://localhost:3000/api/tasks/<_id> -H "Content-Type: application/json" -d '{"done":true}'
curl -X DELETE http://localhost:3000/api/tasks/<_id>
```

---

## איך זה מתחבר לשקפים

| שקף / תרגיל | מה משתמש בשרת |
|---|---|
| מפגש 2, שלב 5 | HTTP Request ‏`POST http://api:3000/api/tasks` |
| מפגש 2, תרגיל 1 | `GET http://api:3000/api/tasks` |
| מפגש 2, תרגיל 2 | בדיקת אורך ב-n8n. ה-API עצמו מחזיר 400 רק כש-title ריק |
| מפגש 3, שלבים 5–7 | `GET /api/tasks` ושדה `done` |
| מפגש 4, תרגיל 1 | `DELETE /api/tasks/:id` עם ה-`_id` |
| האתר | localhost:8080 מציג, מוסיף, מסמן ומוחק משימות |

---

## מבנה התיקייה
```
server_presentaion_2/
├── docker-compose.yml   client + api + n8n
├── .env.example         תבנית ל-DATABASE_URL
├── api/                 שרת Node (Express + pg)
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
├── client/              האתר (nginx)
│   ├── index.html
│   └── nginx.conf       מעביר את /api/ ל-api:3000
└── db/
    ├── schema.sql       יצירת הטבלה ב-Neon
    └── seed.sql         משימות לדוגמה
```

## הרצה בלי Docker (לפיתוח)
```bash
cd api
npm install
npm run dev
```
`npm run dev` קורא את `../.env`. במצב הזה n8n שב-Docker מגיע לשרת דרך `http://host.docker.internal:3000`.

## נתקעתם?
| מה רואים | מה עושים |
|---|---|
| `Missing DATABASE_URL` | לא נוצר `.env`, או שהוא לא בתיקייה הראשית |
| `Could not connect to the database` | ה-connection string שגוי, או שחסר `?sslmode=require` בסופו |
| `port is already allocated` (5678) | n8n ממפגש 1 עדיין רץ. עוצרים אותו |
| האתר מציג "שגיאה" | `docker compose logs api` |
| n8n מקבל `ECONNREFUSED` | ב-n8n כותבים `http://api:3000`, לא `localhost` |
