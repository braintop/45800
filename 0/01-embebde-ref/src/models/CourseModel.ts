import { Schema, model } from 'mongoose';

const lessonSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});
const courseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    teacher: {
        type: String,
        required: true
    },
    lessons: {
        type: [lessonSchema],
        default: []
    }
});

export const CourseModel = model(
    'Course',
    courseSchema
);
