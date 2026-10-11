import { Router } from 'express';

import {
    createEnrollment,
    getAllEnrollments,
    getEnrollmentById,
    getEnrollmentsByStudent,
    getEnrollmentsByCourse
} from '../conrollers/enrollmentController';

const router = Router();

router.get('/', getAllEnrollments);

router.get('/student/:studentId', getEnrollmentsByStudent);

router.get('/course/:courseId', getEnrollmentsByCourse);

router.get('/:id', getEnrollmentById);

router.post('/', createEnrollment);

export default router;
