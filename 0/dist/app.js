"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const serverless_1 = require("@neondatabase/serverless");
const app = (0, express_1.default)();
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
app.get('/', (req, res) => {
    res.send('Hello Node');
});
app.get('/cities', async (req, res) => {
    const cities = await getCities();
    res.json(cities);
});
app.listen(3000, () => {
    console.log(`http://localhost:${3000}`);
});
