"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCourse = exports.updateCourse = exports.createCourse = exports.getCourseById = exports.getCourses = void 0;
const serverless_1 = require("@neondatabase/serverless");
let databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
    throw new Error('DATABASE_URL is not set');
}
const sql = (0, serverless_1.neon)(databaseUrl);
const getCourses = async (_req, res) => {
    const courses = await sql `SELECT * FROM courses`;
    return res.json(courses);
};
exports.getCourses = getCourses;
const getCourseById = async (req, res) => {
    const id = req.params.id;
    const course = await sql `SELECT * FROM courses WHERE "course_id" = ${id}`;
    return res.json(course);
};
exports.getCourseById = getCourseById;
const createCourse = async (req, res) => {
    const { course_name } = req.body;
    const course = await sql `INSERT INTO courses (course_name) VALUES (${course_name}) RETURNING "course_id", course_name`;
    return res.json(course);
};
exports.createCourse = createCourse;
const updateCourse = async (req, res) => {
    const id = req.params.id;
    const { course_name } = req.body;
    const course = await sql `UPDATE courses SET course_name = ${course_name} WHERE "course_id" = ${id}`;
    return res.json(course);
};
exports.updateCourse = updateCourse;
const deleteCourse = async (req, res) => {
    const id = req.params.id;
    const course = await sql `DELETE FROM courses WHERE "course_id" = ${id}`;
    return res.json(course);
};
exports.deleteCourse = deleteCourse;
