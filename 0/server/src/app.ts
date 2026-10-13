//npm install @modelcontextprotocol/sdk
import 'dotenv/config'
import express from 'express'
import chatRoutes from './routes/chatRoutes'
import cors from 'cors'
const app = express()
app.use(cors())

app.use(express.json())
app.use("/api", chatRoutes)
app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
export default app