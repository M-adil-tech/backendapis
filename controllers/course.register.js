const courseServices = require('../Services/course.services')

exports.registerCourse =  async (req,res,next)=>{
    try {
        const { userId,courseName,CourseId,creditHourse,section} = req.body;
        let courseData = await courseServices.createcourse(userId,courseName,CourseId,creditHourse,section);
        res.json({status: true,success:courseData});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}

exports.getregisterCourse =  async (req,res,next)=>{
    try {
        const { CourseId } = req.body;
        let courseData = await courseServices.getregisterCourse(CourseId);
        res.json({status: true,success:courseData});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}

