import express from 'express'

import { chat } from '../controllers/agentController'

import { authMiddleware } from '../middleware/authMiddleware'

const router = express.Router()

// authMiddleware חובה:
// בלעדיו אין user_id, ואז אין הרשאות
router.post('/chat', authMiddleware, chat)

export default router
