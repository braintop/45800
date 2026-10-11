"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEnrollment = createEnrollment;
exports.getAllEnrollments = getAllEnrollments;
exports.getEnrollmentById = getEnrollmentById;
exports.getEnrollmentsByStudent = getEnrollmentsByStudent;
exports.getEnrollmentsByCourse = getEnrollmentsByCourse;
const EnrollmentModel_1 = require("../models/EnrollmentModel");
const mongoose_1 = __importDefault(require("mongoose"));
// Body:
// {
//   "student": "507f1f77bcf86cd799439011",
//   "course": "507f191e810c19729de860ea"
// }
// המזהים בדוגמה הם להמחשה בלבד. יש להחליף אותם במזהים אמיתיים שנוצרו במסד הנתונים.
async function createEnrollment(req, res) {
    try {
        const enrollment = await EnrollmentModel_1.EnrollmentModel.create(req.body);
        res.status(201).json(enrollment);
    }
    catch (error) {
        res.status(500).json({
            message: 'Error creating enrollment'
        });
    }
}
async function getAllEnrollments(req, res) {
    try {
        const enrollments = await EnrollmentModel_1.EnrollmentModel.find().populate('student', 'firstName lastName email').populate('course', 'name teacher ');
        res.status(200).json(enrollments);
    }
    catch (error) {
        res.status(500).json({
            message: 'Error getting enrollments'
        });
    }
}
async function getEnrollmentById(req, res) {
    try {
        const { id } = req.params;
        const enrollment = await EnrollmentModel_1.EnrollmentModel
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
    }
    catch (error) {
        res.status(500).json({
            message: 'Error getting enrollment'
        });
    }
}
async function getEnrollmentsByStudent(req, res) {
    try {
        const { studentId } = req.params;
        if (!mongoose_1.default.isValidObjectId(studentId)) {
            res.status(400).json({
                message: 'Invalid student ID'
            });
            return;
        }
        const enrollments = await EnrollmentModel_1.EnrollmentModel
            .find({ student: studentId })
            .populate('course', 'name teacher lessons');
        res.status(200).json(enrollments);
    }
    catch (error) {
        res.status(500).json({
            message: 'Error getting student enrollments'
        });
    }
}
async function getEnrollmentsByCourse(req, res) {
    try {
        const { courseId } = req.params;
        if (!mongoose_1.default.isValidObjectId(courseId)) {
            res.status(400).json({
                message: 'Invalid course ID'
            });
            return;
        }
        const enrollments = await EnrollmentModel_1.EnrollmentModel
            .find({ course: courseId })
            .populate('student', 'firstName lastName email');
        res.status(200).json(enrollments);
    }
    catch (error) {
        res.status(500).json({
            message: 'Error getting course enrollments'
        });
    }
}
