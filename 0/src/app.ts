import { Request, Response } from 'express'
import express from 'express'
import 'dotenv/config'
import { neon } from '@neondatabase/serverless'
const app = express()

type City = {
  city_id: number
  city_name: string
}



const databaseUrl = process.env.DATABASE_URL
if (!databaseUrl) {
  throw new Error('DATABASE_URL is not set')
}
const sql = neon(databaseUrl)
async function getCities() {
  return (await sql`
    SELECT "city_id", city_name
    FROM cities
    ORDER BY city_name ASC
  `) as City[]
}


app.get('/', (req: Request, res: Response) => {
  res.send('Hello Node')
})
app.get('/cities', async (req: Request, res: Response) => {
  const cities = await getCities()
  res.json(cities)
})
app.listen(3000, () => {
  console.log(`http://localhost:${3000}`)
})
