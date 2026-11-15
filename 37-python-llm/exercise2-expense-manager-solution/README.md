# פתרון תרגיל 2: מנהל הוצאות חכם

המשתמש כותב משפט רגיל, Gemini מחלץ ממנו הוצאה מובנית, הקוד בודק אותה ושומר ב-MySQL.

## הרצה

```bash
docker compose up -d
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
```

ממלאים ב-`.env` את `GEMINI_API_KEY` ואת `JWT_SECRET`.

אם המסד כבר קיים מהתרגיל הקודם, יוצרים את הטבלה ידנית (פעם אחת):

```bash
docker exec -i python_school_mysql mysql -uappuser -papp_password_change_me school_db < sql/expenses.sql
```

בדיקת המודל מהטרמינל (שלב 5), ואז הרצת השרת:

```bash
python test_extract.py
python app.py
```

## הכתובות

| פעולה | Method | URL | טוקן |
|---|---|---|---|
| הרשמה | POST | `/api/users/register` | לא |
| התחברות | POST | `/api/users/login` | לא |
| הוצאה מטקסט חופשי | POST | `/api/expenses/ai` | כן |
| כל ההוצאות | GET | `/api/expenses/` | כן |
| סיכום לפי קטגוריה | GET | `/api/expenses/summary` | כן |
| סיכום לחודש | GET | `/api/expenses/summary?month=2026-11` | כן |
| מחיקת הוצאה | DELETE | `/api/expenses/<id>` | כן |

הכתובת המלאה: `http://localhost:5002` + הנתיב. הטוקן נשלח ב-Postman תחת Authorization → Bearer Token.

גוף הבקשה ל-`/api/expenses/ai`:

```json
{"message": "שילמתי 340 שקל על דלק אתמול בכרטיס אשראי"}
```

## הקבצים החדשים

| קובץ | מה יש בו |
|---|---|
| `sql/expenses.sql` | הטבלה, עם `DECIMAL(10,2)` לסכום |
| `models/expense_model.py` | `create`, `get_by_id`, `get_all`, `summary`, `delete`. בכולן `user_id` ב-WHERE |
| `services/llm_service.py` | `EXPENSE_INSTRUCTION`, `EXPENSE_SCHEMA`, `extract_expense` (נוספו לקובץ הקיים) |
| `controllers/expense_controller.py` | `is_valid_expense` והפונקציות של ה-Controller |
| `routes/expense_routes.py` | הכתובות, מוגנות ב-`check_token` |
| `test_extract.py` | בדיקת ארבעת המשפטים ישירות מול המודל |

## תוספות מעבר לקוד שבתרגיל

1. **התאריך של היום נשלח למודל.** המודל לא יודע איזה יום היום, ובלי זה "אתמול" הופך לתאריך מומצא.
2. **כלל 7 בהוראה:** התיאור באותה שפה של ההודעה. בלעדיו המודל כתב `Fuel` במקום `דלק`.
3. **בדיקת ספרה בהודעה (`has_number`).** פותרת את בדיקה 9: משפט בלי אף ספרה נדחה ב-400 לפני שפונים למודל.
4. **`to_json`:** המסד מחזיר `Decimal` ו-`date`. ממירים אותם למספר ולתאריך `YYYY-MM-DD`, אחרת חוזרים `"340.00"` ותאריך בפורמט לא נוח.
5. **`isinstance(amount, bool)`:** בפייתון `True` הוא גם `int`, ולכן הוא נפסל בנפרד.
