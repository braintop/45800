import { Request, Response } from 'express';
import { EnrollmentModel } from '../models/EnrollmentModel';
import mongoose from 'mongoose';

// Body:
// {
//   "student": "507f1f77bcf86cd799439011",
//   "course": "507f191e810c19729de860ea"
// }
// המזהים בדוגמה הם להמחשה בלבד. יש להחליף אותם במזהים אמיתיים שנוצרו במסד הנתונים.


export async function createEnrollment(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const enrollment = await EnrollmentModel.create(
            req.body
        );

        res.status(201).json(enrollment);
    } catch (error) {
        res.status(500).json({
            message: 'Error creating enrollment'
        });
    }
}


export async function getAllEnrollments(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const enrollments = await EnrollmentModel.find().populate('student','firstName lastName email').populate('course','name teacher ');
        res.status(200).json(enrollments);
    } catch (error) {
        res.status(500).json({
            message: 'Error getting enrollments'
        });
    }
}
export async function getEnrollmentById(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const { id } = req.params;

        const enrollment = await EnrollmentModel
            .findById(id)
            .populate('student', 'firstName lastName email')
            .populate('course', 'name teacher lessons');

        if (!enrollment) {
            res.status(404).json({
                message: 'Enrollment not found'
            });
            return;
        }

        res.status(200).json(enrollment);

    } catch (error) {
        res.status(500).json({
            message: 'Error getting enrollment'
        });
    }
}


export async function getEnrollmentsByStudent(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const { studentId } = req.params;

        if (!mongoose.isValidObjectId(studentId)) {
            res.status(400).json({
                message: 'Invalid student ID'
            });
            return;
        }

        const enrollments = await EnrollmentModel
            .find({ student: studentId })
            .populate('course', 'name teacher lessons');

        res.status(200).json(enrollments);

    } catch (error) {
        res.status(500).json({
            message: 'Error getting student enrollments'
        });
    }
}

export async function getEnrollmentsByCourse(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const { courseId } = req.params;

        if (!mongoose.isValidObjectId(courseId)) {
            res.status(400).json({
                message: 'Invalid course ID'
            });
            return;
        }

        const enrollments = await EnrollmentModel
            .find({ course: courseId })
            .populate('student', 'firstName lastName email');

        res.status(200).json(enrollments);

    } catch (error) {
        res.status(500).json({
            message: 'Error getting course enrollments'
        });
    }
}

