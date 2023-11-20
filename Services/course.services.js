
// const courseModel = require("../models/course.model");

// class courseService{
//     static async createcourse(userId,courseName,CourseId,creditHourse,section){
//             const coursedata= new courseModel({userId,courseName,CourseId,creditHourse,section});
//             return await coursedata.save();
//     }

//     static async getcourse(userId){
//         const courseList = await courseModel.find({userId})
//         return courseList;
//     }


// }

// module.exports = courseService;

const courseModel = require("../models/course.model");

class CourseService {
    static async createCourse(userId, courseName, creditHours, section) {
        const coursedata = new courseModel({ userId, courseName, creditHours, section });
        return await coursedata.save();
    }

    static async getCourseByUserId(userId) {
        const courseList = await courseModel.find({ userId });
        return courseList;
    }

    static async getCourseByCourseId(courseId) {
        return await courseModel.findOne({ CourseId: courseId });
    }

    static async updateCourse(courseId, updateData) {
        return await courseModel.findOneAndUpdate(
            { CourseId: courseId },
            { $set: updateData },
            { new: true }
        );
    }

    static async deleteCourse(courseId) {
        return await courseModel.findOneAndDelete({ CourseId: courseId });
    }
}

module.exports = CourseService;

