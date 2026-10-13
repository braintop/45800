import { Response } from 'express'

import { sql } from '../db'

import {
  extractTask
} from '../services/llmService'

import {
  AuthRequest
} from '../middleware/authMiddleware'

function isValidTask(task: any) {
  const priorities = [
    'low',
    'medium',
    'high'
  ]

  const categories = [
    'study',
    'work',
    'personal',
    'other'
  ]

  return (
    typeof task.title === 'string' &&
    task.title.length > 0 &&
    priorities.includes(
      task.priority
    ) &&
    categories.includes(
      task.category
    )
  )
}

export async function createAITask(
  req: AuthRequest,
  res: Response
) {
  try {
    const { message } = req.body

    if (
      !message ||
      typeof message !== 'string'
    ) {
      return res.status(400).json({
        error:
          'Valid message is required'
      })
    }

    if (!req.user) {
      return res.status(401).json({
        error: 'Unauthorized'
      })
    }

    const taskData =
      await extractTask(message)

    if (!isValidTask(taskData)) {
      return res.status(400).json({
        error:
          'AI returned invalid task'
      })
    }

    const userId = req.user.user_id
      

    const tasks = await sql`
      INSERT INTO tasks (
        title,
        priority,
        category,
        user_id
      )
      VALUES (
        ${taskData.title},
        ${taskData.priority},
        ${taskData.category},
        ${userId}
      )
      RETURNING *
    `

    res.status(201).json(
      tasks[0]
    )

  } catch (error) {
    console.error(error)

    res.status(500).json({
      error:
        'Failed to create AI task'
    })
  }
}

export async function getAllTasks(
  req: AuthRequest,
  res: Response
) {
  try {
    if (!req.user) {
      return res.status(401).json({
        error: 'Unauthorized'
      })
    }

    const userId =
      req.user.user_id

    const tasks = await sql`
      SELECT *
      FROM tasks
      WHERE user_id = ${userId}
      ORDER BY task_id DESC
    `

    res.json(tasks)

  } catch (error) {
    console.error(error)

    res.status(500).json({
      error:
        'Failed to get tasks'
    })
  }
}
