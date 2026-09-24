import { Router } from 'express';
import { getCourses, getCourseById, createCourse, updateCourse, deleteCourse } from '../controller/coursesController';

const router = Router();

router.get('/', getCourses);
router.get('/:id', getCourseById);
router.post('/', createCourse);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);

export default router;