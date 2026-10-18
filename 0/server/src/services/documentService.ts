import { sql } from '../db'

import {
  createEmbedding,
  toVectorString
} from './embeddingService'

// ============================================
// documentService
//
// האחריות:
// 1. לשמור מסמכים יחד עם ה-Embedding שלהם.
// 2. לבצע Vector Search.
//
// כאן אין שום קריאה למודל היוצר תשובות.
// ============================================

export type DocumentRow = {
  document_id: number
  title: string
  content: string
}

export type SearchResult =
  DocumentRow & {
    distance: number
  }

export async function addDocument(
  title: string,
  content: string
): Promise<DocumentRow> {

  // הטקסט -> Embedding
  const embedding =
    await createEmbedding(content)

  const vector =
    toVectorString(embedding)

  const result = await sql`
    INSERT INTO documents (
      title,
      content,
      embedding
    )
    VALUES (
      ${title},
      ${content},
      ${vector}::vector
    )
    RETURNING
      document_id,
      title,
      content
  `

  return result[0] as DocumentRow
}


// ============================================
// Vector Search
//
// <=> הוא אופרטור של pgvector.
// הוא מחשב Distance בין שני Vectors.
// Distance קטן יותר = קרוב יותר במשמעות.
//
// limit     = Top K   (כמה מסמכים להחזיר)
// threshold = מרחק מקסימלי שעדיין נחשב רלוונטי
// ============================================

export async function searchDocuments(
  question: string,
  limit: number = 3,
  threshold: number = 0.7
): Promise<SearchResult[]> {

  // גם השאלה הופכת ל-Vector,
  // באותו מודל ובאותו מספר מימדים.
  const embedding =
    await createEmbedding(question)

  const vector =
    toVectorString(embedding)

  const documents = await sql`
    SELECT
      document_id,
      title,
      content,
      embedding <=> ${vector}::vector
        AS distance

    FROM documents

    WHERE
      embedding <=> ${vector}::vector
        < ${threshold}

    ORDER BY
      embedding <=> ${vector}::vector

    LIMIT ${limit}
  `

  return documents as SearchResult[]
}


export async function getAllDocuments(): Promise<DocumentRow[]> {

  const documents = await sql`
    SELECT
      document_id,
      title,
      content

    FROM documents

    ORDER BY document_id
  `

  return documents as DocumentRow[]
}


export async function countDocuments(): Promise<number> {

  const result = await sql`
    SELECT COUNT(*)::int AS count
    FROM documents
  `

  return (result[0] as { count: number }).count
}


