import { Router } from 'express';
import { enrollStudent, getEnrollments, updateEnrollment } from '../conrollers/enrollmentController';

const router = Router();

router.post('/', enrollStudent);
router.get('/', getEnrollments);
router.put('/:enrollmentId', updateEnrollment);

export default router;