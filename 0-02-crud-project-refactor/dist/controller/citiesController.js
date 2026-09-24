"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCity = exports.updateCity = exports.createCity = exports.getCityById = exports.getCities = void 0;
const serverless_1 = require("@neondatabase/serverless");
let databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
    throw new Error('DATABASE_URL is not set');
}
const sql = (0, serverless_1.neon)(databaseUrl);
const getCities = async (_req, res) => {
    const cities = await sql `SELECT * FROM cities`;
    return res.json(cities);
};
exports.getCities = getCities;
const getCityById = async (req, res) => {
    const id = req.params.id;
    const city = await sql `SELECT * FROM cities WHERE "city_id" = ${id}`;
    return res.json(city);
};
exports.getCityById = getCityById;
const createCity = async (req, res) => {
    const { city_name } = req.body;
    const city = await sql `INSERT INTO cities (city_name) VALUES (${city_name}) RETURNING "city_id", city_name`;
    return res.json(city);
};
exports.createCity = createCity;
const updateCity = async (req, res) => {
    const id = req.params.id;
    const { city_name } = req.body;
    const city = await sql `UPDATE cities SET city_name = ${city_name} WHERE "city_id" = ${id}`;
    return res.json(city);
};
exports.updateCity = updateCity;
const deleteCity = async (req, res) => {
    const id = req.params.id;
    const city = await sql `DELETE FROM cities WHERE "city_id" = ${id}`;
    return res.json(city);
};
exports.deleteCity = deleteCity;
