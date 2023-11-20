// const courseServices = require('../Services/course.services')

// exports.registerCourse =  async (req,res,next)=>{
//     try {
//         const { userId,courseName,CourseId,creditHourse,section} = req.body;
//         let courseData = await courseServices.createcourse(userId,courseName,CourseId,creditHourse,section);
//         res.json({status: true,success:courseData});
//     } catch (error) {
//         console.log(error, 'err---->');
//         next(error);
//     }
// }

// exports.getregisterCourse =  async (req,res,next)=>{
//     try {
//         const { CourseId } = req.body;
//         let courseData = await courseServices.getregisterCourse(CourseId);
//         res.json({status: true,success:courseData});
//     } catch (error) {
//         console.log(error, 'err---->');
//         next(error);
//     }
// }

const CourseService = require('../services/course.services');

exports.registerCourse = async (req, res, next) => {
    try {
        const { userId, courseName, creditHours, section } = req.body;
        const courseData = await CourseService.createCourse(userId, courseName, creditHours, section);
        res.json({ status: true, success: courseData });
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
};

exports.getregisterCourse = async (req, res, next) => {
    try {
        const { CourseId } = req.query;
        let courseData;
        if (CourseId) {
            courseData = await CourseService.getCourseByCourseId(CourseId);
        } else {
            const { userId } = req.query;
            courseData = await CourseService.getCourseByUserId(userId);
        }
        res.json({ status: true, success: courseData });
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
};

exports.updateCourse = async (req, res, next) => {
    try {
        const { courseId } = req.params;
        const updateData = req.body;
        const updatedCourse = await CourseService.updateCourse(courseId, updateData);
        res.json({ status: true, success: updatedCourse });
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
};

exports.deleteCourse = async (req, res, next) => {
    try {
        const { courseId } = req.params;
        const deletedCourse = await CourseService.deleteCourse(courseId);
        res.json({ status: true, success: deletedCourse });
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
};

