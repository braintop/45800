"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseModel = void 0;
const mongoose_1 = require("mongoose");
const lessonSchema = new mongoose_1.Schema({
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
const courseSchema = new mongoose_1.Schema({
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
exports.CourseModel = (0, mongoose_1.model)('Course', courseSchema);
