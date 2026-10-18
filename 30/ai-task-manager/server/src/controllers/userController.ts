// משתמשים: הרשמה והתחברות. השיעור מניח שמערכת users כבר קיימת
// מקורס קודם, הקובץ הזה כלול כדי שהפרויקט ירוץ מקצה לקצה.

import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { sql } from '../db'

export async function register(
  req: Request,
  res: Response
) {
  try {
    const { user_name, email, password } = req.body

    if (!user_name || !email || !password) {
      return res.status(400).json({
        error: 'user_name, email and password are required'
      })
    }

    const hashed = await bcrypt.hash(password, 10)

    const users = await sql`
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

    res.status(201).json(users[0])

  } catch (error) {
    console.error(error)

    res.status(500).json({
      error: 'Failed to register'
    })
  }
}

export async function login(
  req: Request,
  res: Response
) {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({
        error: 'email and password are required'
      })
    }

    const users = await sql`
      SELECT *
      FROM users
      WHERE email = ${email}
    `

    const user = users[0]

    if (!user) {
      return res.status(401).json({
        error: 'Invalid email or password'
      })
    }

    const match = await bcrypt.compare(
      password,
      user.password
    )

    if (!match) {
      return res.status(401).json({
        error: 'Invalid email or password'
      })
    }

    const secret = process.env.JWT_SECRET

    if (!secret) {
      throw new Error('JWT_SECRET is not set')
    }

    const token = jwt.sign(
      {
        user_id: user.user_id,
        email: user.email,
        role: user.role
      },
      secret,
      {
        expiresIn: '1h'
      }
    )

    res.json({
      token,
      user: {
        user_id: user.user_id,
        user_name: user.user_name,
        email: user.email,
        role: user.role
      }
    })

  } catch (error) {
    console.error(error)

    res.status(500).json({
      error: 'Failed to login'
    })
  }
}
