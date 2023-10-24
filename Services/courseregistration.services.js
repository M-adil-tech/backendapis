// services.js

const Course = require('../models/courseregistration.model');

// Function to calculate the total credit hours of all courses
// exports.calculateTotalCreditHours = async () => {
//   try {
//     const courses = await Course.find();
//     const totalCreditHours = courses.reduce((acc, course) => acc + course.creditHours, 0);
//     return totalCreditHours;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// Function to find a course by its ID
exports.findCourseById = async (courseId) => {
  try {
    const course = await Course.findOne({ courseId });
    if (!course) {
      throw new Error('Course not found');
    }
    return course;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Function to update a course's information
exports.updateCourse = async (courseId, newData) => {
  try {
    const course = await Course.findOneAndUpdate({ courseId }, newData, { new: true });
    if (!course) {
      throw new Error('Course not found');
    }
    return course;
  } catch (error) {
    throw new Error(error.message);
  }
};
