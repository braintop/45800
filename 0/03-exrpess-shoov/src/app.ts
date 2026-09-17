import express, { Request, Response } from 'express';
const app = express();
const PORT = 3000;
import cors from 'cors';
app.use(cors())

let persons = [
  { id: 1, name: 'John', age: 20 },
  { id: 2, name: 'Jane', age: 21 },
  { id: 3, name: 'Jim', age: 22 },
];

app.get('/persons', (req: Request, res: Response) => {
  res.json(persons);
});

app.get('/persons/:id', (req: Request, res: Response) => {
  let id = +req.params.id;
  let person = persons.find((person) => person.id ===id);
  if (person) {
    res.status(200).json(person);
  } else {
    res.status(404).json({ error: 'Person not found' });
  }
});

// Define a route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express!');
});

app.get('/school', (req: Request, res: Response) => {
  res.send('welcome to school!');
});

app.get('/course', (req: Request, res: Response) => {
  res.send('im learning!');
});

app.get('/student', (req: Request, res: Response) => {
  res.send('im a student!');
});

app.get('/teacher', (req: Request, res: Response) => {
  res.send('im a teacher!');
});





app.get('/person/:id', (req: Request, res: Response) => {

  let id = req.params.id;
  res.send(`im a person with id ${req.params.id}`);
});

app.get('/student/:id', (req: Request, res: Response) => {
  let id = req.params.id;
  res.send(`im a student with id ${id}`);
});

app.get('/hello/:name', (req: Request, res: Response) => {
  let name = req.params.name;
  res.send(`hello ${name}`);
});

app.get('/hello/:name/:city', (req: Request, res: Response) => {
  let name = req.params.name;
  let city = req.params.city;
  res.send(`hello ${name} from ${city}`);
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});