"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
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
    console.log(`Server running at http://localhost:${PORT}`);
});
