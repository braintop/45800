import { GoogleGenAI, Type } from '@google/genai'
import { NewTask } from '../types/Task'

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
})

// שיעור 1: שאלה חופשית, תשובה חופשית
export async function askLLM(
  message: string
): Promise<string> {

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: message
  })

  return response.text ?? ''
}

// שיעור 2: Structured Output — חילוץ משימה מטקסט חופשי
export async function extractTask(
  message: string
): Promise<NewTask> {

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',

    contents: message,

    config: {
      systemInstruction: `
        You extract structured task data
        from user requests.

        Rules:

        1. title must be short and clear.

        2. priority must be:
           low, medium or high.

        3. If priority is not specified,
           use medium.

        4. category must be:
           study, work, personal or other.

        5. Infer the category from context.

        6. If no category can be inferred,
           use other.
      `,

      responseMimeType: 'application/json',

      responseSchema: {
        type: Type.OBJECT,

        properties: {
          title: {
            type: Type.STRING
          },

          priority: {
            type: Type.STRING,
            enum: [
              'low',
              'medium',
              'high'
            ]
          },

          category: {
            type: Type.STRING,
            enum: [
              'study',
              'work',
              'personal',
              'other'
            ]
          }
        },

        required: [
          'title',
          'priority',
          'category'
        ]
      }
    }
  })

  const task = JSON.parse(response.text ?? '{}')

  return task
}
