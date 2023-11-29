
const CourseModel = require("../models/course.model");

class CourseService {
    static async createCourse(userId, courseName, creditHours, section) {
    
        const subjectCode = this.getSubjectCodeFromCourseName(courseName);
        
        const courseData = new CourseModel({ userId, subjectCode, courseName, creditHours, section });
        return await courseData.save();
    }
    

    static async getCoursesByUserId(userId) {
        try {
            console.log('Fetching courses for userId:', userId);
    
            const courses = await CourseModel.find({ userId });
    
            console.log('Courses fetched successfully:', courses);
    
            return courses;
        } catch (error) {
            console.error('Error fetching courses:', error);
            throw error;
        }
    }
    

    static async updateCourseStatus(userId, courseName, status) {
        return await CourseModel.findOneAndUpdate({ userId, courseName }, { status }, { new: true });
    }

    // static async deleteCourseByUserIdAndCourseId(userId, courseId) {
    //     try {
    //         console.log(`Deleting course with ID ${courseId} for user with ID ${userId}`);
    //         const deletedCourse = await CourseModel.findOneAndRemove({ userId, courseId });
    
    //         if (!deletedCourse) {
    //             throw new Error('Course not found for the specified user and course ID.');
    //         }
    
    //         console.log('Course deleted successfully:', deletedCourse);
    //         return deletedCourse;
    //     } catch (error) {
    //         console.error('Error deleting course:', error);
    //         throw error;
    //     }
    // }
    

    // static async deleteCourse(userId, courseId) {
    //     return await CourseModel.findOneAndRemove({ userId, courseId });
    // }

    // Helper function to get subjectCode from courseName
    static getSubjectCodeFromCourseName(courseName) {
        
        switch (courseName.toLowerCase()) {
            case 'english':
                return '111';
            case 'physics':
                return '212';
            case 'math':
                return '333';
            case 'chemistry':
                return '484';
            case 'biology':
                return '343';    
            default:
                return '';
        }
    }
}

module.exports = CourseService;
