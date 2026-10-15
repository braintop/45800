import 'dotenv/config'

import express from 'express'
import cors from 'cors'

import ragRoutes from './routes/ragRoutes'

const app = express()

app.use(cors())

app.use(express.json())

app.use('/api/rag', ragRoutes)

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

const port =
  Number(process.env.PORT) || 3000

app.listen(port, () => {
  console.log(
    `Server is running on port ${port}`
  )
})

export default app
