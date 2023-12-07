const mongoose = require('mongoose');

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
        let courseData = await courseServices.getCoursesByUserId();

        // Check if courseData is an array and has at least one element
        if (Array.isArray(courseData) && courseData.length > 0) {
            return res.json({ status: true, success: courseData });
        } else {
            return res.json({ status: true, success: [] });
        }
    } catch (error) {
        console.error(error);
        next(error);
    }
};


// exports.getCourses = async (req, res, next) => {
//     try {
//         const { userId } = req.params;
//         let courseData = await courseServices.getCoursesByUserId(userId);

//         if (!courseData) {
//             return res.status(404).json({ status: false, error: 'No courses found for the specified user.' });
//         }

//         res.json({ status: true, success: courseData });
//     } catch (error) {
//         console.error(error);
//         next(error);
//     }
// };


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

// exports.deleteCourseByUserIdAndCourseId = async (req, res, next) => {
//     try {
//         const { userId, courseId } = req.params;
//         let deletedCourse = await courseServices.deleteCourseByUserIdAndCourseId(userId, courseId);

//         res.json({ status: true, success: `Deleted course with ID ${deletedCourse.courseId} for the specified user.` });
//     } catch (error) {
//         console.error(error);
//         next(error);
//     }
// };


// exports.deleteCourse = async (req, res, next) => {
//     try {
//         const { courseId } = req.params;
//         let deletedCourse = await courseServices.deleteCourse(courseId);
//         res.json({ status: true, success: deletedCourse });
//     } catch (error) {
//         console.error(error);
//         next(error);
//     }
// };
