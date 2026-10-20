import express from 'express'

import {
  createAITask,
  getAllTasks
} from '../controllers/taskController'

import {
  authMiddleware
} from '../middleware/authMiddleware'

const router = express.Router()

router.post(
  '/ai',
  authMiddleware,
  createAITask
)

router.get(
  '/',
  authMiddleware,
  getAllTasks
)

export default router
