"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const serverless_1 = require("@neondatabase/serverless");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
    throw new Error('DATABASE_URL is not set');
}
const sql = (0, serverless_1.neon)(databaseUrl);
async function getCities() {
    return (await sql `
    SELECT "city_id", city_name
    FROM cities
    ORDER BY city_name ASC
  `);
}
//read all cities
app.get('/', (req, res) => {
    res.send('Hello Node');
});
app.get('/cities', async (req, res) => {
    const cities = await getCities();
    res.json(cities);
});
//read a city by id
app.get('/cities/:id', async (req, res) => {
    try {
        const id = req.params.id;
        let city = (await sql `SELECT "city_id", city_name FROM cities WHERE "city_id" = ${id}`);
        if (city.length === 0) {
            return res.status(404).json({ error: 'City not found' });
        }
        res.json(city);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});
//create a new city
app.post('/cities', async (req, res) => {
    try {
        const { city_name } = req.body;
        console.log(city_name);
        let city = (await sql `INSERT INTO cities (city_name) VALUES (${city_name}) RETURNING "city_id", city_name`);
        res.json(city);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});
//delete a city by id
app.delete('/cities/:id', async (req, res) => {
    try {
        const id = req.params.id;
        let city = (await sql `DELETE FROM cities WHERE "city_id" = ${id}`);
        res.json("city deleted successfully");
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.put('/cities/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { city_name } = req.body;
        let city = (await sql `UPDATE cities SET city_name = ${city_name} WHERE "city_id" = ${id}`);
        res.json("city updated successfully");
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.listen(3000, () => {
    console.log(`http://localhost:${3000}`);
});
