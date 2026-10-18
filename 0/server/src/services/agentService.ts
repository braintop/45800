import { GoogleGenAI } from '@google/genai'

import { allTools } from '../tools/toolDefinitions'

import { executeTool } from '../tools/executeTool'

// ============================================
// agentService
//
// כאן קורות שתי הקריאות ל-Gemini:
//
//   1. שולחים את השאלה ואת רשימת הכלים.
//      מקבלים בקשה להפעיל פונקציה.
//
//   2. אנחנו מריצים אותה בעצמנו.
//
//   3. שולחים את התוצאה בחזרה.
//      מקבלים משפט מנוסח למשתמש.
// ============================================

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
})

const MODEL =
  process.env.GENERATIVE_MODEL ??
  'gemini-2.5-flash'

const SYSTEM_INSTRUCTION = `
You are an assistant for a company system.

Use the provided tools to answer.
Never guess data that a tool can provide.

If no tool fits the question, say that you
only answer questions about this system.

Answer in the language of the user.
`

export type AgentResult = {
  answer: string
  toolsUsed: string[]
}

export async function runAgent(
  message: string,
  userId: number
): Promise<AgentResult> {

  const contents: any[] = [
    {
      role: 'user',
      parts: [{ text: message }]
    }
  ]

  const config = {
    tools: [
      { functionDeclarations: allTools }
    ],
    systemInstruction: SYSTEM_INSTRUCTION
  }

  // ----- קריאה ראשונה -----
  const first =
    await ai.models.generateContent({
      model: MODEL,
      contents,
      config
    })

  const calls = first.functionCalls

  // המודל לא ביקש כלי, הוא ענה ישירות
  if (!calls || calls.length === 0) {
    return {
      answer: first.text ?? '',
      toolsUsed: []
    }
  }

  const call = calls[0]

  // שימו לב לשורה הזאת:
  // userId מגיע מכאן, מהשרת.
  // אף פעם לא מ-call.args
  const result =
    await executeTool(
      call.name as string,
      call.args,
      userId
    )

  // ----- מוסיפים לשיחה את הבקשה ואת התוצאה -----
  contents.push({
    role: 'model',
    parts: [{ functionCall: call }]
  })

  contents.push({
    role: 'user',
    parts: [{
      functionResponse: {
        name: call.name,
        response: { result }
      }
    }]
  })

  // ----- קריאה שנייה -----
  const second =
    await ai.models.generateContent({
      model: MODEL,
      contents,
      config
    })

  return {
    answer: second.text ?? '',
    toolsUsed: [call.name as string]
  }
}
