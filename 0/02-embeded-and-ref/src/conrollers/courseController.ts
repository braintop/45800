import { Request, Response } from 'express';
import { CourseModel } from '../models/CourseModel';

export async function createCourse(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const course = await CourseModel.create(req.body);

        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({
            message: 'Error creating course'
        });
    }
}

export async function getCourses(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const courses = await CourseModel.find();

        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({
            message: 'Error getting courses'
        });
    }
}
export async function addLesson(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const { courseId } = req.params;

        const course = await CourseModel.findByIdAndUpdate(
            courseId,
            {
                $push: {
                    lessons: req.body
                }
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!course) {
            res.status(404).json({
                message: 'Course not found'
            });
            return;
        }

        res.json(course);
    } catch (error) {
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
