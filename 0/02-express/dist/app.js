"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let app = (0, express_1.default)();
app.get('/a/b', (req, res) => {
    res.send('Hello World a b');
});
app.get('/a/c', (req, res) => {
    res.send('Hello World a c');
});
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/persons', (req, res) => {
    res.send('Hello World persons');
});
app.get('/persons/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.params);
    res.send(`Hello World persons ${id}`);
});
app.get('/books/:page/:line', (req, res) => {
    const page = req.params.page;
    const line = req.params.line;
    console.log(req.params);
    res.send(`Hello World books ${page} ${line}`);
});
app.get('/cars', (req, res) => {
    const circles = req.query.circles;
    const speed = req.query.speed;
    console.log(req.query);
    res.send(`Hello World cars ${circles} ${speed}`);
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
