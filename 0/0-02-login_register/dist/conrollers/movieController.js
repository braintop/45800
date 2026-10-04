"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMovie = exports.updateMovie = exports.createMovie = exports.getMovieById = exports.getMovies = void 0;
const serverless_1 = require("../../node_modules/@neondatabase/serverless");
let databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
    throw new Error('DATABASE_URL is not set');
}
const sql = (0, serverless_1.neon)(databaseUrl);
const getMovies = async (_req, res) => {
    const x = _req.x;
    console.log(x);
    const movies = await sql `SELECT * FROM movies`;
    return res.json(movies);
};
exports.getMovies = getMovies;
const getMovieById = async (req, res) => {
    const { id } = req.params;
    const movie = await sql `SELECT * FROM movies WHERE id = ${id}`;
    return res.json(movie);
};
exports.getMovieById = getMovieById;
const createMovie = async (req, res) => {
    const { movie_name, genre, release_year, rating } = req.body;
    const movie = await sql `INSERT INTO movies (movie_name, genre, release_year, rating) VALUES (${movie_name}, ${genre}, ${release_year}, ${rating})`;
    return res.json("movie created successfully");
};
exports.createMovie = createMovie;
const updateMovie = async (req, res) => {
    const { id } = req.params;
    const { movie_name, genre, release_year, rating } = req.body;
    const movie = await sql `UPDATE movies SET movie_name = ${movie_name}, genre = ${genre}, release_year = ${release_year}, rating = ${rating} WHERE id = ${id}`;
    return res.json("movie updated successfully");
};
exports.updateMovie = updateMovie;
const deleteMovie = async (req, res) => {
    const { id } = req.params;
    const movie = await sql `DELETE FROM movies WHERE id = ${id}`;
    return res.json("movie deleted successfully");
};
exports.deleteMovie = deleteMovie;
