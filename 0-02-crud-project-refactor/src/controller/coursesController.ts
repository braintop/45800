import { Request, Response } from 'express';
import { neon } from '@neondatabase/serverless';

let databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
    throw new Error('DATABASE_URL is not set');
}
const sql = neon(databaseUrl);

export const getCourses = async (_req: Request, res: Response) => {
    const courses = await sql`SELECT * FROM courses`;
    return res.json(courses);
};

export const getCourseById = async (req: Request, res: Response) => {
    const id = req.params.id;
    const course = await sql`SELECT * FROM courses WHERE "course_id" = ${id}`;
    return res.json(course);
};

export const createCourse = async (req: Request, res: Response) => {
    const { course_name } = req.body;
    const course = await sql`INSERT INTO courses (course_name) VALUES (${course_name}) RETURNING "course_id", course_name`;
    return res.json(course);
};

export const updateCourse = async (req: Request, res: Response) => {
    const id = req.params.id;
    const { course_name } = req.body;
    const course = await sql`UPDATE courses SET course_name = ${course_name} WHERE "course_id" = ${id}`;
    return res.json(course);
};

export const deleteCourse = async (req: Request, res: Response) => {
    const id = req.params.id;
    const course = await sql`DELETE FROM courses WHERE "course_id" = ${id}`;
    return res.json(course);
};