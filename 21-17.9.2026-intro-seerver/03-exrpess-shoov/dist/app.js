"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
const cors_1 = __importDefault(require("cors"));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
let persons = [
    { id: 1, name: 'John', age: 20 },
    { id: 2, name: 'Jane', age: 21 },
    { id: 3, name: 'Jim', age: 22 },
];
app.get('/persons', (req, res) => {
    res.json(persons);
});
app.get('/persons/:id', (req, res) => {
    let id = +req.params.id;
    let person = persons.find((person) => person.id === id);
    if (person) {
        res.status(200).json(person);
    }
    else {
        res.status(404).json({ error: 'Person not found' });
    }
});
app.post('/persons', (req, res) => {
    try {
        let person = req.body;
        person.id = persons.length + 1;
        persons.push(person);
        res.status(201).json(person);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.delete('/persons/:id', (req, res) => {
    try {
        let id = +req.params.id;
        persons = persons.filter((person) => person.id !== id);
        res.status(200).json({ message: 'Person deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.put('/persons/:id', (req, res) => {
    try {
        let id = +req.params.id;
        let updatedPerson = req.body;
        persons = persons.map((person) => person.id === id ? updatedPerson : person);
        res.status(200).json(updatedPerson);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});
// Define a route
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});
app.get('/school', (req, res) => {
    res.send('welcome to school!');
});
app.get('/course', (req, res) => {
    res.send('im learning!');
});
app.get('/student', (req, res) => {
    res.send('im a student!');
});
app.get('/teacher', (req, res) => {
    res.send('im a teacher!');
});
app.get('/person/:id', (req, res) => {
    let id = req.params.id;
    res.send(`im a person with id ${req.params.id}`);
});
app.get('/student/:id', (req, res) => {
    let id = req.params.id;
    res.send(`im a student with id ${id}`);
});
app.get('/hello/:name', (req, res) => {
    let name = req.params.name;
    res.send(`hello ${name}`);
});
app.get('/hello/:name/:city', (req, res) => {
    let name = req.params.name;
    let city = req.params.city;
    res.send(`hello ${name} from ${city}`);
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
