const courseServices = require('../Services/course.services.js');
const userServices = require('../Services/user.services.js')

exports.registerCourse = async (req, res, next) => {
    try {
        const { userId, courseName, creditHours, section } = req.body;
        let courseData = await courseServices.createCourse(userId, courseName, creditHours, section);
        res.json({ status: true, success: courseData });
    } catch (error) {
        console.error(error);
        next(error);
    }
};

exports.getCourses = async (req, res, next) => {
    try {
        const { userId } = req.params;
        let courseData = await courseServices.getCoursesByUserId(userId);
        res.json({ status: true, success: courseData });
    } catch (error) {
        console.error(error);
        next(error);
    }
};

exports.updateCourse = async (req, res, next) => {
    try {
        const { courseId, status } = req.body;
        let updatedCourse = await courseServices.updateCourseStatus(courseId, status);
        res.json({ status: true, success: updatedCourse });
    } catch (error) {
        console.error(error);
        next(error);
    }
};

exports.deleteCourse = async (req, res, next) => {
    try {
        const { courseId } = req.params;
        let deletedCourse = await courseServices.deleteCourse(courseId);
        res.json({ status: true, success: deletedCourse });
    } catch (error) {
        console.error(error);
        next(error);
    }
};
