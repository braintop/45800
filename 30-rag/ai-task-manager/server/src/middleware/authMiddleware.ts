import {
  Request,
  Response,
  NextFunction
} from 'express'

import jwt from 'jsonwebtoken'

export interface AuthRequest extends Request {
  user?: {
    user_id: number
    email: string
    role: string
  }
}

export function authMiddleware(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const authorization =req.headers.authorization
    
  console.log("authorization", authorization)
  if (!authorization) {
    return res.status(401).json({
      error: 'Token is missing'
    })
  }

  const token =
    authorization.split(' ')[1]

  if (!token) {
    return res.status(401).json({
      error: 'Token is missing'
    })
  }
console.log(token)
  const secret =
    process.env.JWT_SECRET

  if (!secret) {
    throw new Error(
      'JWT_SECRET is not set'
    )
  } 

  try {
    const decoded =
      jwt.verify(
        token,
        secret
      ) as {
        user_id: number
        email: string
        role: string
      }

    req.user = decoded

    next()

  } catch (error) {
    return res.status(401).json({
      error: 'Invalid token'
    })
  }
}
