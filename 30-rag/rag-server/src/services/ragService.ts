import { GoogleGenAI } from '@google/genai'

import {
  searchDocuments
} from './documentService'

// ============================================
// ragService
//
// כאן קורה ה-RAG עצמו:
//
// question
//    -> Vector Search   (Retrieval)
//    -> Context         (Augmented)
//    -> Gemini          (Generation)
//    -> answer
// ============================================

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
})

const MODEL =
  process.env.GENERATIVE_MODEL ??
  'gemini-2.5-flash'

export const NO_ANSWER =
  "I don't know based on the provided documents."

export type RagAnswer = {
  answer: string
  sources: string[]
}

export async function askDocuments(
  question: string,
  topK: number = 3
): Promise<RagAnswer> {

  // ----- 1. Retrieval -----
  const documents =
    await searchDocuments(
      question,
      topK
    )

  // אם ה-Threshold סינן הכול,
  // אין טעם לשלוח שאלה ל-Gemini בלי Context.
  // חוסך Tokens וגם מונע המצאות.
  if (documents.length === 0) {
    return {
      answer: NO_ANSWER,
      sources: []
    }
  }

  // ----- 2. Augmented: בניית ה-Context -----
  const context =
    documents
      .map(
        (doc, index) => `
Document ${index + 1}

Title:
${doc.title}

Content:
${doc.content}
`
      )
      .join('\n')

  // ----- 3. Generation -----
  const response =
    await ai.models.generateContent({

      model: MODEL,

      contents: `
Question:${question}
Context:${context}


      `,

      config: {
        // Grounding:
        // אנחנו מחייבים את המודל להישען על ה-Context בלבד.
        systemInstruction: `
You answer questions using only
the supplied context.

If the answer is not present
in the context, say exactly:

"${NO_ANSWER}"

Do not invent information.
Do not use outside knowledge.
        `
      }
    })

  const answer =
    response.text ?? NO_ANSWER

  // אם המודל הודה שאין לו תשובה,
  // אין טעם להציג מקורות.
  const sources =
    answer.includes(NO_ANSWER)
      ? []
      : documents.map(
          document => document.title
        )

  return {
    answer,
    sources
  }
}
