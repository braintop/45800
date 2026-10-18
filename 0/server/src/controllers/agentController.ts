import { Response } from 'express'

import { runAgent } from '../services/agentService'

import { AuthRequest } from '../middleware/authMiddleware'

export async function chat(
  req: AuthRequest,
  res: Response
) {

  try {

    const { message } = req.body

    if (
      !message ||
      typeof message !== 'string' ||
      message.trim().length === 0
    ) {
      return res.status(400).json({
        error: 'Message is required'
      })
    }

    if (!req.user) {
      return res.status(401).json({
        error: 'Unauthorized'
      })
    }

    const result =
      await runAgent(
        message.trim(),
        req.user.user_id
      )

    res.json(result)

  } catch (error) {

    console.error(error)

    res.status(500).json({
      error: 'Agent failed'
    })
  }
}
