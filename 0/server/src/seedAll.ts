import 'dotenv/config'

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { sql } from './db'

import { addDocument } from './services/documentService'

import { companyDocuments } from './data/companyDocuments'
import { demoTasks } from './data/demoTasks'

// ============================================
// npm run seed:all
//
// מכין את כל מסד הנתונים להדגמה:
//
//   1. משתמש דמו (סיסמה מוצפנת)
//   2. 17 מסמכים עם Embeddings
//   3. 10 משימות למשתמש הזה
//
// ובסוף מדפיס Token מוכן להדבקה.
//
// דגל שימושי:
//   npm run seed:all -- --tasks-only
// מדלג על המסמכים, ולכן רץ בשנייה
// במקום בחצי דקה. שימושי כשרק רוצים
// לאפס משימות בין הדגמות.
// ============================================

const EMAIL = 'demo@example.com'
const PASSWORD = '123456'
const USER_NAME = 'Demo User'

const tasksOnly =
  process.argv.includes('--tasks-only')

function line() {
  console.log(
    '--------------------------------------'
  )
}

async function seedUser(): Promise<number> {

  const existing = await sql`
    SELECT user_id
    FROM users
    WHERE email = ${EMAIL}
  `

  if (existing.length > 0) {

    const userId =
      (existing[0] as any).user_id

    console.log(
      `User already exists: ${EMAIL} (user_id ${userId})`
    )

    return userId
  }

  // אף פעם לא שומרים סיסמה כטקסט.
  // זו הסיבה שאי אפשר להכניס משתמש ב-INSERT ידני.
  const hashed =
    await bcrypt.hash(PASSWORD, 10)

  const rows = await sql`
    INSERT INTO users (
      user_name,
      email,
      password
    )
    VALUES (
      ${USER_NAME},
      ${EMAIL},
      ${hashed}
    )
    RETURNING user_id
  `

  const userId = (rows[0] as any).user_id

  console.log(
    `User created: ${EMAIL} (user_id ${userId})`
  )

  return userId
}

async function seedDocuments() {

  await sql`DELETE FROM documents`

  console.log(
    `Adding ${companyDocuments.length} documents...`
  )

  for (const document of companyDocuments) {

    process.stdout.write(
      `  ${document.title}\n`
    )

    await addDocument(
      document.title,
      document.content
    )
  }
}

async function seedTasks(userId: number) {

  // מוחקים רק את המשימות של משתמש הדמו,
  // כדי לא לפגוע במשתמשים אחרים שנרשמו בכיתה.
  await sql`
    DELETE FROM tasks
    WHERE user_id = ${userId}
  `

  console.log(
    `Adding ${demoTasks.length} tasks...`
  )

  for (const task of demoTasks) {

    await sql`
      INSERT INTO tasks (
        user_id,
        title,
        priority,
        completed
      )
      VALUES (
        ${userId},
        ${task.title},
        ${task.priority},
        ${task.completed}
      )
    `
  }
}

function printToken(userId: number) {

  const secret = process.env.JWT_SECRET

  if (!secret) {
    console.log('')
    console.log(
      'JWT_SECRET is not set, so no token was created.'
    )
    return
  }

  const token = jwt.sign(
    { user_id: userId, email: EMAIL },
    secret,
    { expiresIn: '30d' }
  )

  line()
  console.log('Token (valid for 30 days):')
  console.log('')
  console.log(token)
  console.log('')
  console.log('להדביק ב-requests.http בשורה:')
  console.log(`@token = ${token.slice(0, 25)}...`)
  line()
}

async function main() {

  line()
  console.log('Seeding the database')
  line()

  const userId = await seedUser()

  if (!tasksOnly) {
    await seedDocuments()
  } else {
    console.log(
      'Skipping documents (--tasks-only)'
    )
  }

  await seedTasks(userId)

  const counts = await sql`
    SELECT
      (SELECT COUNT(*) FROM users)::int      AS users,
      (SELECT COUNT(*) FROM documents)::int  AS documents,
      (SELECT COUNT(*) FROM tasks)::int      AS tasks
  `

  const c = counts[0] as any

  line()
  console.log(`users:     ${c.users}`)
  console.log(`documents: ${c.documents}`)
  console.log(`tasks:     ${c.tasks}`)

  printToken(userId)

  console.log('Done. אפשר להריץ npm run dev')
  console.log('')
}

main().catch(error => {
  console.error(error)
  process.exit(1)
})
