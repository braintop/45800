import { Request, Response } from 'express'

import { askLLM } from '../services/llmService'

export async function chat(
  req: Request,
  res: Response
) {
  try {

    const { message } = req.body

    if (!message) {
      return res.status(400).json({
        error: 'Message is required'
      })
    }

    const answer = await askLLM(message)

    res.json({
      answer
    })

  } catch (error) {

    console.error(error)

    res.status(500).json({
      error: 'Failed to get AI response'
    })

  }
}
