import { Request, Response } from 'express';
import { neon } from '@neondatabase/serverless';

let databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
    throw new Error('DATABASE_URL is not set');
}
const sql = neon(databaseUrl);


export const getCities = async (_req: Request, res: Response) => {
    const cities = await sql`SELECT * FROM cities`;
    return res.json(cities);
};


export const getCityById = async (req: Request, res: Response) => {
    const id = req.params.id;
    const city = await sql`SELECT * FROM cities WHERE "city_id" = ${id}`;
    return res.json(city);
};

export const createCity = async (req: Request, res: Response) => {
    const { city_name } = req.body;
    const city = await sql`INSERT INTO cities (city_name) VALUES (${city_name}) RETURNING "city_id", city_name`;
    return res.json(city);
};

export const updateCity = async (req: Request, res: Response) => {
    const id = req.params.id;
    const { city_name } = req.body;
    const city = await sql`UPDATE cities SET city_name = ${city_name} WHERE "city_id" = ${id}`;
    return res.json(city);
};


export const deleteCity = async (req: Request, res: Response) => {
    const id = req.params.id;
    const city = await sql`DELETE FROM cities WHERE "city_id" = ${id}`;
    return res.json(city);
};