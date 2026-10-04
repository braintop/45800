import { Request, Response } from 'express';
import { neon } from '../../node_modules/@neondatabase/serverless';

let databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
    throw new Error('DATABASE_URL is not set');
}
const sql = neon(databaseUrl);


export const getMovies = async (_req: Request, res: Response) => {
    const movies = await sql`SELECT * FROM movies`;
    return res.json(movies);
};

export const getMovieById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const movie = await sql`SELECT * FROM movies WHERE id = ${id}`;
    return res.json(movie);
};

export const createMovie = async (req: Request, res: Response) => {
    const { movie_name, genre, release_year, rating } = req.body;
    const movie = await sql`INSERT INTO movies (movie_name, genre, release_year, rating) VALUES (${movie_name}, ${genre}, ${release_year}, ${rating})`;
    return res.json("movie created successfully");
};

export const updateMovie = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { movie_name, genre, release_year, rating } = req.body;
    const movie = await sql`UPDATE movies SET movie_name = ${movie_name}, genre = ${genre}, release_year = ${release_year}, rating = ${rating} WHERE id = ${id}`;
    return res.json("movie updated successfully");
};

export const deleteMovie = async (req: Request, res: Response) => {
    const { id } = req.params;
    const movie = await sql`DELETE FROM movies WHERE id = ${id}`;
    return res.json("movie deleted successfully");
};