import { Router } from 'express';
import { createCourse, getCourses, addLesson } from '../conrollers/courseController';

const router = Router();

router.post('/', createCourse);
router.get('/', getCourses);
router.post('/:courseId/lessons', addLesson);

export default router;