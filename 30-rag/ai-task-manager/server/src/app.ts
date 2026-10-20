import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import chatRoutes from './routes/chatRoutes'
import taskRoutes from './routes/taskRoutes'
import userRoutes from './routes/userRoutes'

const app = express()

app.use(cors())

app.use(express.json())

app.use(chatRoutes)

app.use('/api/tasks', taskRoutes)

app.use('/users', userRoutes)

const port = Number(process.env.PORT) || 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

export default app
