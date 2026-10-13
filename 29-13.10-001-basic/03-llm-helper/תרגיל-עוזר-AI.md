# תרגיל: עוזר AI חכם 🤖

בתרגיל הקודם בנינו `POST /chat`: שולחים הודעה ו-Gemini עונה.
היום נוסיף לשרת **3 כלים חדשים** שמשתמשים באותו AI:
מתרגם, מסכם ו"מורה פרטי".

המבנה **בדיוק כמו בפעם הקודמת**: service, controller, routes.

---

## שלב 0 – הכנת הפרויקט

1. מעתיקים את הפרויקט של ה-chat לתיקייה חדשה בשם `03-ai-helper`.
2. מוודאים שיש קובץ `.env` עם `GEMINI_API_KEY`.
3. מריצים:
   ```
   npm install
   npm run dev
   ```
4. בודקים ב-Postman ש-`POST /chat` עדיין עובד.

---

## הרעיון המרכזי 💡

ה-AI מקבל **טקסט** (prompt).
אנחנו לא שולחים אותו כמו שהמשתמש כתב, אלא **בונים prompt בעצמנו** בעזרת Template String:

```ts
const text = 'Good morning'
const language = 'Hebrew'

const prompt = `Translate this text to ${language}: ${text}`
// Translate this text to Hebrew: Good morning
```

את ה-prompt שולחים לפונקציה שכבר יש לנו: `askLLM(prompt)`.

---

## משימה 1 – מתרגם 🌍

- **Route:** `POST /translate`
- **פונקציה ב-controller:** `translate`
- **מה מקבלים ב-body:**
  ```json
  { "text": "Good morning, how are you?", "language": "Hebrew" }
  ```
- **מה עושים:**
  1. מוציאים `text` ו-`language` מ-`req.body`
  2. אם אחד מהם חסר, מחזירים `400` עם `error: 'Text and language are required'`
  3. בונים prompt: `Translate this text to ${language}. Return only the translation: ${text}`
  4. שולחים ל-`askLLM` ומחזירים `{ translation: ... }`

💡 **רמז:** העתיקו את הפונקציה `chat` ושנו אותה.

✅ **דוגמה לתוצאה** (הניסוח יכול להיות קצת שונה):
```json
{ "translation": "בוקר טוב, מה שלומך?" }
```

---

## משימה 2 – מסכם 📝

- **Route:** `POST /summary`
- **פונקציה:** `summarize`
- **מה מקבלים ב-body:**
  ```json
  { "text": "...טקסט ארוך כלשהו..." }
  ```
- **מה עושים:**
  1. אם אין `text`, מחזירים `400`
  2. prompt: `Summarize this text in 3 short sentences: ${text}`
  3. מחזירים `{ summary: ... }`

🧪 **לבדיקה:** מעתיקים פסקה מוויקיפדיה ושולחים.

---

## משימה 3 – מורה פרטי 👩‍🏫 (System Instruction)

עד עכשיו ה-AI ענה "רגיל".
אפשר לתת לו **תפקיד קבוע** בעזרת `systemInstruction`.

### 3א – פונקציה חדשה ב-service

ב-`llmService.ts` מוסיפים פונקציה **חדשה** (לא מוחקים את `askLLM`):

```ts
export async function askLLMWithRole(
  message: string,
  role: string
): Promise<string> {

  const response = await ai.models.generateContent({
    model: 'gemini-3.7-flash',
    contents: message,
    config: {
      systemInstruction: role
    }
  })

  return response.text ?? ''
}
```

### 3ב – controller ו-route

- **Route:** `POST /teacher`
- **פונקציה:** `teacher`
- **body:** `{ "message": "מה זה מערך ב-JavaScript?" }`
- שולחים ל-`askLLMWithRole` עם התפקיד הזה:
  ```
  You are a patient programming teacher for beginners.
  Answer in simple Hebrew, in no more than 5 sentences,
  and always give one short code example.
  ```
- מחזירים `{ answer: ... }`

✅ **בדיקה:** שאלו את אותה שאלה ב-`/chat` וב-`/teacher`. ההבדל צריך להיות ברור: ב-`/teacher` התשובה קצרה, בעברית פשוטה ועם דוגמה.

---

## ⭐ בונוס

### בונוס 1 – בחירת רמה
ב-`/teacher` מקבלים גם `level` (`"easy"` או `"hard"`) ומוסיפים לסוף התפקיד את המשפט:
`Explain at ${level} level.`

### בונוס 2 – מחולל חידון
- **Route:** `POST /quiz`
- **body:** `{ "topic": "JavaScript arrays" }`
- prompt: `Write 3 multiple-choice questions about ${topic}, with the correct answer after each one`
- מחזירים `{ quiz: ... }`

---

## ⚠️ טעויות נפוצות
- Template String כותבים עם **גרש הפוך** (המקש שמשמאל ל-1), לא עם `'`. בלי זה `${text}` לא מתחלף.
- שוכחים `await` לפני `askLLM`, ומקבלים `{}` ריק.
- שוכחים לעשות `import` לפונקציה החדשה ב-routes או ב-controller.
- ב-Postman: Body, אחר כך **raw**, ואז **JSON**. אחרת `req.body` יהיה ריק.
