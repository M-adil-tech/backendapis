const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course.register');

router.post("/courseregister", courseController.registerCourse);
router.get("/getcourses/:userId", courseController.getCourses);
// router.put("/updatecourse", courseController.updateCourse);
// router.delete("/deletecourse/:courseId", courseController.deleteCourse);

module.exports = router;
