import { GoogleGenAI } from '@google/genai'

// ============================================
// embeddingService
//
// האחריות היחידה של הקובץ הזה:
// Text  ->  Embedding Model  ->  Vector
//
// המודל הזה לא עונה על שאלות.
// הוא רק מייצר ייצוג מספרי של המשמעות.
// ============================================

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
})

const MODEL =
  process.env.EMBEDDING_MODEL ??
  'gemini-embedding-2'

export const DIMENSIONS =
  Number(
    process.env.EMBEDDING_DIMENSIONS ?? 768
  )

export async function createEmbedding(
  text: string
): Promise<number[]> {

  const response =
    await ai.models.embedContent({
      model: MODEL,

      contents: text,

      config: {
        outputDimensionality: DIMENSIONS
      }
    })

  const embedding =
    response.embeddings?.[0]?.values

  if (!embedding) {
    throw new Error(
      'Failed to create embedding'
    )
  }

  // חשוב מאוד:
  // אם המסמכים נשמרו עם 768 מימדים,
  // גם השאלה חייבת לקבל 768 מימדים.
  // אחרת אי אפשר להשוות ביניהם.
  if (embedding.length !== DIMENSIONS) {
    throw new Error(
      `Expected ${DIMENSIONS} dimensions ` +
      `but got ${embedding.length}`
    )
  }

  return embedding
}

// pgvector מקבל Vector בצורה של מחרוזת:
// [0.12,0.43,-0.21]
// לכן הופכים את המערך למחרוזת.
export function toVectorString(
  embedding: number[]
): string {

  return `[${embedding.join(',')}]`
}
