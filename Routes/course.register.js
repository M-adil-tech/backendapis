// const express = require('express');
// const router = express.Router();
// const courseController = require('../controllers/course.register');

// router.post("/courseregister",courseController.registerCourse);
// router.get("/getcourse",courseController.getregisterCourse);


// module.exports = router;

const express = require('express');
const router = express.Router();
const CourseController = require('../controllers/course.register');

router.post("/courseregister", CourseController.registerCourse);
router.get("/getcourse", CourseController.getregisterCourse);
router.put("/updatecourse/:courseId", CourseController.updateCourse);
router.delete("/deletecourse/:courseId", CourseController.deleteCourse);

module.exports = router;
