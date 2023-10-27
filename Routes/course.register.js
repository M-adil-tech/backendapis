const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course.register');

router.post("/courseregister",courseController.registerCourse);
router.get("/getcourse",courseController.getregisterCourse);


module.exports = router;

