import express from 'express';
import 'dotenv/config';
import { neon } from '../node_modules/@neondatabase/serverless';
import { Request, Response } from 'express'


let databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
    throw new Error('DATABASE_URL is not set');
}
const sql = neon(databaseUrl);

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/cities', async (req, res) => {
    const cities = await sql`SELECT * FROM cities`;
    res.json(cities);
});

  
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
  
//===============================================

app.get('/courses', async (req: Request, res: Response) => {
    const courses = await sql`SELECT * FROM courses`;
    res.json(courses);
});

app.get('/courses/:id', async (req: Request, res: Response) => {
    const id = req.params.id
    const course = await sql`SELECT * FROM courses WHERE "course_id" = ${id}`;
    res.json(course);
});


app.post('/courses', async (req: Request, res: Response) => {
    const { course_name } = req.body
    const course = await sql`INSERT INTO courses (course_name) VALUES (${course_name}) RETURNING "course_id", course_name`;
    res.json(course);
});


app.delete('/courses/:id', async (req: Request, res: Response) => {
    const id = req.params.id
    const course = await sql`DELETE FROM courses WHERE "course_id" = ${id}`;
    res.json(course);
});

app.put('/courses/:id', async (req: Request, res: Response) => {
    const id = req.params.id
    const { course_name } = req.body
    const course = await sql`UPDATE courses SET course_name = ${course_name} WHERE "course_id" = ${id}`;
    res.json(course);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});