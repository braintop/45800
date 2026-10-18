import { Request, Response } from 'express'

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { sql } from '../db'

// ============================================
// הרשמה והתחברות.
// חומר משיעורים קודמים, נמצא כאן כדי שיהיה Token אמיתי.
// ============================================

function signToken(user: any) {

  const secret = process.env.JWT_SECRET

  if (!secret) {
    throw new Error('JWT_SECRET is not set')
  }

  return jwt.sign(
    {
      user_id: user.user_id,
      email: user.email
    },
    secret,
    { expiresIn: '7d' }
  )
}

export async function register(
  req: Request,
  res: Response
) {

  try {

    const { user_name, email, password } = req.body

    if (!user_name || !email || !password) {
      return res.status(400).json({
        error: 'All fields are required'
      })
    }

    const hashed =
      await bcrypt.hash(password, 10)

    const rows = await sql`
      INSERT INTO users (
        user_name,
        email,
        password
      )
      VALUES (
        ${user_name},
        ${email},
        ${hashed}
      )
      RETURNING user_id, user_name, email
    `

    const user = rows[0]

    res.status(201).json({
      user,
      token: signToken(user)
    })

  } catch (error: any) {

    if (error?.code === '23505') {
      return res.status(409).json({
        error: 'Email already exists'
      })
    }

    console.error(error)

    res.status(500).json({
      error: 'Registration failed'
    })
  }
}

export async function login(
  req: Request,
  res: Response
) {

  try {

    const { email, password } = req.body

    const rows = await sql`
      SELECT user_id, user_name, email, password
      FROM users
      WHERE email = ${email}
    `

    const user = rows[0] as any

    if (!user) {
      return res.status(401).json({
        error: 'Invalid credentials'
      })
    }

    const match =
      await bcrypt.compare(
        password,
        user.password
      )

    if (!match) {
      return res.status(401).json({
        error: 'Invalid credentials'
      })
    }

    res.json({
      user: {
        user_id: user.user_id,
        user_name: user.user_name,
        email: user.email
      },
      token: signToken(user)
    })

  } catch (error) {

    console.error(error)

    res.status(500).json({
      error: 'Login failed'
    })
  }
}
