const express = require('express');
const router = express.Router();
const CourseController = require('../controllers/courseregistration.controller');

router.post('/courseregister', CourseController.createCourse);
router.get('/courses', CourseController.getCourses);

module.exports = router;
