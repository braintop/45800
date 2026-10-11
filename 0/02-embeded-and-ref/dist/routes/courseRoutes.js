"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const courseController_1 = require("../conrollers/courseController");
const router = (0, express_1.Router)();
router.post('/', courseController_1.createCourse);
router.get('/', courseController_1.getCourses);
router.post('/:courseId/lessons', courseController_1.addLesson);
exports.default = router;
