"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = createCourse;
exports.getCourses = getCourses;
exports.addLesson = addLesson;
const CourseModel_1 = require("../models/CourseModel");
async function createCourse(req, res) {
    try {
        const course = await CourseModel_1.CourseModel.create(req.body);
        res.status(201).json(course);
    }
    catch (error) {
        res.status(500).json({
            message: 'Error creating course'
        });
    }
}
async function getCourses(req, res) {
    try {
        const courses = await CourseModel_1.CourseModel.find();
        res.status(200).json(courses);
    }
    catch (error) {
        res.status(500).json({
            message: 'Error getting courses'
        });
    }
}
async function addLesson(req, res) {
    try {
        const { courseId } = req.params;
        const course = await CourseModel_1.CourseModel.findByIdAndUpdate(courseId, {
            $push: {
                lessons: req.body
            }
        }, {
            new: true,
            runValidators: true
        });
        if (!course) {
            res.status(404).json({
                message: 'Course not found'
            });
            return;
        }
        res.json(course);
    }
    catch (error) {
        res.status(500).json({
            message: 'Error adding lesson'
        });
    }
}
/*
{
  "name": "React Development",
  "teacher": "Dana Cohen",
  "lessons": [
    {
      "title": "Introduction to React",
      "duration": 2
    },
    {
      "title": "Components",
      "duration": 3
    },
    {
      "title": "useState",
      "duration": 4
    }
  ]
}

*/
