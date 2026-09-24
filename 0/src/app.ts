//crud create read update delete
import { Request, Response } from 'express'
import express from 'express'
import 'dotenv/config'
import { neon } from '@neondatabase/serverless'
const app = express()
app.use(express.json())
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
//read all cities
app.get('/', (req: Request, res: Response) => {
  res.send('Hello Node')
})
app.get('/cities', async (req: Request, res: Response) => {
  const cities = await getCities()
  res.json(cities)
})

//read a city by id
app.get('/cities/:id', async (req: Request, res: Response) => {
  try {
  const id = req.params.id
    let city = (await sql`SELECT "city_id", city_name FROM cities WHERE "city_id" = ${id}`) 
    if(city.length === 0) {
      return res.status(404).json({ error: 'City not found' })
    }
    res.json(city)
  }
   catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
});

//create a new city
app.post('/cities', async (req: Request, res: Response) => {
  try {
    const { city_name } = req.body
    console.log(city_name)
    let city = (await sql`INSERT INTO cities (city_name) VALUES (${city_name}) RETURNING "city_id", city_name`)
    res.json(city)
  }
  catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
});

//delete a city by id
app.delete('/cities/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    let city = (await sql`DELETE FROM cities WHERE "city_id" = ${id}`)
    res.json("city deleted successfully")
  }
  catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}); 

//update a city by id
app.put('/cities/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const { city_name } = req.body
    let city = (await sql`UPDATE cities SET city_name = ${city_name} WHERE "city_id" = ${id}`)
    res.json("city updated successfully")
  }
  catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
});

app.listen(3000, () => {
  console.log(`http://localhost:${3000}`)
})
