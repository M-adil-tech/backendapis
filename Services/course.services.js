const CourseModel = require("../models/course.model");

class CourseService {
    static async createCourse(userId, courseName, creditHours, section) {
        // Implement the logic to map courseName to subjectCode here
        const subjectCode = this.getSubjectCodeFromCourseName(courseName);
        
        const courseData = new CourseModel({ userId, subjectCode, courseName, creditHours, section });
        return await courseData.save();
    }

    static async getCoursesByUserId(userId) {
        try {
            const courses = await CourseModel.find({ userId });
            return courses;
        } catch (error) {
            throw error;
        }
    }

    static async updateCourseStatus(userId, courseName, status) {
        return await CourseModel.findOneAndUpdate({ userId, courseName }, { status }, { new: true });
    }

    static async deleteCourse(userId, courseId) {
        return await CourseModel.findOneAndRemove({ userId, courseId });
    }

    // Helper function to get subjectCode from courseName
    static getSubjectCodeFromCourseName(courseName) {
        // Basic example logic to map courseName to subjectCode
        switch (courseName.toLowerCase()) {
            case 'english':
                return '111';
            case 'physics':
                return '212';
            case 'math':
                return '333';
            case 'chemistry':
                return '484';
            // Add more cases as needed
            default:
                return '';
        }
    }
}

module.exports = CourseService;
