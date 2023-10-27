
const courseModel = require("../models/course.model");

class courseService{
    static async createcourse(userId,courseName,CourseId,creditHourse,section){
            const coursedata= new courseModel({userId,courseName,CourseId,creditHourse,section});
            return await coursedata.save();
    }

    static async getcourse(userId){
        const courseList = await courseModel.find({userId})
        return courseList;
    }


}

module.exports = courseService;