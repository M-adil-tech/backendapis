const Course = require('../models/courseregistration.model');

exports.registerCourse = async (req, res, next) => {
    try {
        const { courseId, courseName, creditHours, status } = req.body;

        const newCourse = new Course({
            courseId,
            courseName,
            creditHours,
            status,
        });

        const savedCourse = await newCourse.save();

        res.status(201).json({ status: true, course: savedCourse });
    } catch (error) {
        next(error);
    }
};

exports.getAllCourses = async (req, res, next) => {
  try {
      const courses = await Course.find(); // Retrieve all courses
      res.status(200).json({ status: true, courses });
  } catch (error) {
      next(error);
  }
};

exports.getCourseById = async (req, res, next) => {
    try {
        const courseId = req.params.courseId;
        const course = await Course.findOne({ courseId });

        if (!course) {
            return res.status(404).json({ status: false, message: 'Course not found' });
        }

        res.status(200).json({ status: true, course });
    } catch (error) {
        next(error);
    }
};

