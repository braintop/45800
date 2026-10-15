import 'dotenv/config'

import { sql } from './db'

import {
  addDocument
} from './services/documentService'

import {
  companyDocuments
} from './data/companyDocuments'

// ============================================
// npm run seed
//
// לכל מסמך:
// content -> createEmbedding -> vector(768) -> PostgreSQL
// ============================================

async function seed() {

  // מנקים כדי שהרצה חוזרת לא תיצור כפילויות.
  await sql`DELETE FROM documents`

  for (const document of companyDocuments) {

    console.log(
      `Adding: ${document.title}`
    )

    await addDocument(
      document.title,
      document.content
    )
  }

  console.log('')

  console.log(
    `Documents added successfully: ${companyDocuments.length}`
  )
}

seed().catch(error => {
  console.error(error)
  process.exit(1)
})
