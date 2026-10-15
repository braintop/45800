import 'dotenv/config'

import { sql } from './db'

import {
  createEmbedding,
  DIMENSIONS
} from './services/embeddingService'

import {
  countDocuments
} from './services/documentService'

// ============================================
// npm run check
//
// בודק את כל מה שנוטים לשכוח,
// לפני שמתחילים לחפש באגים בקוד:
//
// 1. משתני סביבה
// 2. חיבור למסד הנתונים
// 3. ההרחבה pgvector
// 4. הטבלה
// 5. מודל ה-Embedding ומספר המימדים
// ============================================

async function check() {

  let failed = false

  function ok(message: string) {
    console.log(`  OK    ${message}`)
  }

  function bad(message: string) {
    failed = true
    console.log(`  FAIL  ${message}`)
  }

  console.log('')
  console.log('1. Environment')

  if (process.env.GEMINI_API_KEY) {
    ok('GEMINI_API_KEY exists')
  } else {
    bad('GEMINI_API_KEY is missing in .env')
  }

  if (process.env.DATABASE_URL) {
    ok('DATABASE_URL exists')
  } else {
    bad('DATABASE_URL is missing in .env')
  }

  if (failed) {
    console.log('')
    console.log('עצרנו כאן. השלימו את קובץ ה-.env')
    process.exit(1)
  }

  console.log('')
  console.log('2. Database')

  try {
    await sql`SELECT 1`
    ok('connection works')
  } catch (error) {
    bad('cannot connect to the database')
    console.error(error)
    process.exit(1)
  }

  try {
    const rows = await sql`
      SELECT 1
      FROM pg_extension
      WHERE extname = 'vector'
    `

    if (rows.length > 0) {
      ok('pgvector extension is installed')
    } else {
      bad(
        'pgvector is missing. הריצו ב-Neon: ' +
        'CREATE EXTENSION IF NOT EXISTS vector;'
      )
    }
  } catch (error) {
    bad('could not check the extension')
  }

  try {
    const count = await countDocuments()

    if (count > 0) {
      ok(`documents table has ${count} rows`)
    } else {
      bad(
        'the documents table is empty. הריצו: npm run seed'
      )
    }
  } catch (error) {
    bad(
      'the documents table does not exist. ' +
      'הריצו את sql/schema.sql ב-Neon'
    )
  }

  console.log('')
  console.log('3. Embedding model')

  try {
    const embedding =
      await createEmbedding('I love JavaScript')

    ok(
      `model works, got ${embedding.length} dimensions`
    )

    if (embedding.length === DIMENSIONS) {
      ok(
        `dimensions match the table: ${DIMENSIONS}`
      )
    } else {
      bad(
        `expected ${DIMENSIONS} dimensions`
      )
    }

  } catch (error) {
    bad(
      'the embedding model failed. ' +
      'בדקו את EMBEDDING_MODEL ב-.env'
    )
    console.error(error)
  }

  console.log('')

  if (failed) {
    console.log('יש בעיות. תקנו אותן לפי ההודעות למעלה.')
    process.exit(1)
  }

  console.log('הכול תקין. אפשר להריץ npm run dev')
  console.log('')
}

check()
