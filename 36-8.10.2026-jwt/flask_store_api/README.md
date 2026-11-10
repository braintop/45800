# Flask Store API – פתרון

מערכת לניהול חנות מוצרים: Python + Flask + MySQL + Docker.

## הרצה

```bash
# 1. סביבה וירטואלית
python3 -m venv .venv            # Windows: py -m venv .venv
source .venv/bin/activate        # Windows: .venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt

# 2. קובץ .env
cp .env.example .env             # ולעדכן DB_PASSWORD=store_password_123

# 3. MySQL ב-Docker
docker compose up -d
docker compose ps

# 4. השרת
python app.py                    # http://127.0.0.1:5050
```

בדיקת הטבלאות:

```bash
docker exec -it flask_store_mysql mysql -ustoreuser -p store_db
```

```sql
SHOW TABLES;
SELECT * FROM categories;
SELECT * FROM products;
```

## Endpoints

| Method | URL | פעולה |
|---|---|---|
| GET | / | הודעת ברוכים הבאים |
| GET | /api/products | כל המוצרים |
| GET | /api/products/1 | מוצר לפי מזהה (404 אם לא קיים) |
| POST | /api/products | הוספת מוצר (201, או 400 בקלט לא תקין) |
| PUT | /api/products/1 | עדכון מוצר |
| DELETE | /api/products/1 | מחיקת מוצר |
| GET | /api/categories | כל הקטגוריות |
| GET | /api/categories/1 | קטגוריה לפי מזהה (404 אם לא קיימת) |

גוף בקשה ל-POST ול-PUT:

```json
{
  "name": "Keyboard",
  "price": 250,
  "quantity": 10,
  "category_id": 3
}
```

## מבנה

- `config/db.py` – פונקציה `get_connection()` שקוראת את `.env` ופותחת חיבור ל-MySQL.
- `models/` – רק SQL. כל מתודה פותחת חיבור, מריצה שאילתה עם `%s` וסוגרת ב-`finally`.
- `controllers/` – קבלת ה-JSON, ולידציה, החלטה על קוד הסטטוס (200 / 201 / 400 / 404 / 500).
- `routes/` – Blueprints שמחברים URL + Method לפונקציה ב-Controller.
- `sql/init.sql` – יצירת הטבלאות ונתוני דוגמה. רץ רק כשה-Volume ריק (בפעם הראשונה).

## תשובות לשאלות הסיכום

1. **מה עושה pip?** מנהל החבילות של Python. מוריד ומתקין ספריות (כמו Flask) מ-PyPI.
2. **למה יוצרים venv?** כדי שלכל פרויקט יהיו הספריות והגרסאות שלו, בלי להתנגש בפרויקטים אחרים ובלי ללכלך את ה-Python של המחשב.
3. **מה התפקיד של Flask?** ספרייה לבניית שרת Web. היא מקבלת בקשות HTTP, מפנה כל URL לפונקציה המתאימה ומחזירה תשובה.
4. **ההבדל בין GET ל-POST?** GET קורא נתונים ולא משנה כלום. POST שולח נתונים בגוף הבקשה כדי ליצור משהו חדש.
5. **מה עושה jsonify()?** הופך dict או list של Python לתשובת JSON עם Content-Type: application/json.
6. **למה request.get_json()?** כדי לקרוא את ה-JSON שהלקוח שלח בגוף הבקשה ולקבל אותו כ-dict. עם `silent=True` מקבלים None במקום שגיאה אם הגוף לא JSON תקין.
7. **ההבדל בין Model ל-Controller?** ה-Model מדבר עם מסד הנתונים (SQL בלבד). ה-Controller מדבר עם הלקוח: בודק קלט, קורא ל-Model ומחליט מה להחזיר ובאיזה סטטוס.
8. **מה עושה conn.commit()?** שומר סופית את השינויים (INSERT / UPDATE / DELETE). בלי commit השינוי לא נשמר במסד.
9. **למה צריך Docker Volume?** קונטיינר הוא זמני. ה-Volume שומר את קבצי מסד הנתונים מחוץ לקונטיינר, כך שהנתונים נשארים גם אחרי עצירה או מחיקה של הקונטיינר.
10. **stop לעומת down -v?** `docker compose stop` רק עוצר את הקונטיינר, והכל נשאר. `docker compose down -v` מוחק את הקונטיינר **וגם את ה-Volume**, כלומר את כל הנתונים. בהפעלה הבאה init.sql ירוץ מחדש על מסד ריק.

**שאלות נוספות מהשלבים:**

- **Image / Container / Volume:** Image היא התבנית (קריאה בלבד), Container הוא מופע רץ של התבנית, ו-Volume הוא אחסון קבוע שחי מחוץ לקונטיינר.
- **.env:** קובץ הגדרות עם סודות וערכים שמשתנים בין מחשבים. הוא לא נכנס ל-Git (נמצא ב-.gitignore), ולכן הסיסמה לא נחשפת בקוד. מגישים במקומו `.env.example`.
- **DB_HOST / DB_PORT:** הכתובת והפורט של שרת MySQL. 127.0.0.1 הוא המחשב שלנו, ו-3307 הוא הפורט שממופה לפורט 3306 בתוך הקונטיינר.
