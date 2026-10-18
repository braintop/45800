import {
  Request,
  Response,
  NextFunction
} from 'express'

import jwt from 'jsonwebtoken'

// ============================================
// המקור היחיד לזהות המשתמש במערכת.
// כל מה שהמודל אומר על זהות, אנחנו מתעלמים ממנו.
// ============================================

export interface AuthRequest extends Request {
  user?: {
    user_id: number
    email: string
  }
}

export function authMiddleware(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {

  const authorization =
    req.headers.authorization

  const token =
    authorization?.split(' ')[1]

  if (!token) {
    return res.status(401).json({
      error: 'Token is missing'
    })
  }

  const secret = process.env.JWT_SECRET

  if (!secret) {
    throw new Error('JWT_SECRET is not set')
  }

  try {

    const decoded =
      jwt.verify(token, secret) as {
        user_id: number
        email: string
      }

    req.user = decoded

    next()

  } catch (error) {

    return res.status(401).json({
      error: 'Invalid token'
    })
  }
}
