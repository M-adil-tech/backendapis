const Course = require('../models/courseregistration.model');

class CourseServices {
    static async registerCourse(courseId, courseName, creditHours, status) {

      console.log("-----Course ID --- Course Name----- Credit Hours-----",courseId, courseName, creditHours, status);
        const newCourse = new Course({courseId, courseName, creditHours, status});
        return await newCourse.save();
    }


    static async getAllCourses() {
      try{
        return await Course.find();
      }
      catch (error) {
        throw error;
      }
      
    }

    static async getCourseById(courseId) {
      try{
        return await Course.findById({ courseId });
      }
      catch (error) {
        throw error;
      }
      
    }

}

module.exports = CourseServices;

