import express from 'express';
import { Request, Response } from 'express';
let app = express(); 
app.get('/a/b', (req: Request, res: Response) => {
    res.send('Hello World a b');
});

app.get('/a/c', (req: Request, res: Response) => {
    res.send('Hello World a c');
});


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

app.get('/persons', (req: Request, res: Response) => {
    res.send('Hello World persons');
});


app.get('/persons/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    console.log(req.params);
    res.send(`Hello World persons ${id}`);
});

app.get('/books/:page/:line', (req: Request, res: Response) => {
    const page = req.params.page;
    const line = req.params.line;
    console.log(req.params);
    res.send(`Hello World books ${page} ${line}`);
});

app.get('/cars', (req: Request, res: Response) => {
    const circles = req.query.circles;
    const speed = req.query.speed;
    console.log(req.query);
    res.send(`Hello World cars ${circles} ${speed}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}); 