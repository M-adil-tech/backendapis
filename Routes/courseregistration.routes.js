const express = require('express');
const router = express.Router();
const CourseController = require('../controllers/courseregistration.controller');

router.post('/courseregister', CourseController.registerCourse);
router.get('/courses', CourseController.getAllCourses);
router.get('/:courseId', CourseController.getCourseById);

module.exports = router;

