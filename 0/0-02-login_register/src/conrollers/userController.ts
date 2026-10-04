import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { User } from '../types/User'
import { neon } from '@neondatabase/serverless'
import jwt from 'jsonwebtoken'
const sql = neon(process.env.DATABASE_URL!)

export const registerUser = async (req: Request, res: Response) => {
    try {
        const { user_name, email, password } = req.body

        if (!user_name || !email || !password) {
            return res.status(400).json({ message: 'Missing required fields' })
        }
        const existingUsers = await sql`
        SELECT *
        FROM users
        WHERE email = ${email}
      `
   
      if (existingUsers.length > 0) {
        return res.status(400).json({
          error: 'Email already exists'
        })
      }
  
        const hashedPassword = await bcrypt.hash(password, 10)
        const user: User = { user_id: 0, user_name:user_name, email:email.toLowerCase(), password: hashedPassword, role: 'user' }
        const result = await sql.query('INSERT INTO users (user_name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *', [user.user_name, user.email, user.password, user.role])
        res.json(result)
    } catch (error) {
        res.status(500).json({ message: 'Error registering user' })
    }
}

export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ message: 'Missing required fields' })
        }
        const existingUsers = await sql`
        SELECT *
        FROM users
        WHERE email = ${email}
      `
      if (existingUsers.length === 0) {
        return res.status(400).json({ error: 'User not found' })
      }
      const user = existingUsers[0]
      const isPasswordValid = await bcrypt.compare(password, user.password)
      if (!isPasswordValid) {
        return res.status(400).json({ error: 'Invalid password' })
      }
      const token = jwt.sign({ user_id: user.user_id,"user_name":user.user_name}, process.env.JWT_SECRET!, { expiresIn: '1h' })
      res.json({ message: 'Login successful', token })
    } catch (error) {
        res.status(500).json({ message: 'Error logging in user' })
    }
}

