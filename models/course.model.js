// const bcrypt = require("bcrypt");
// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// function generateRandomCourseID() {
//     const prefix = 'CS-';
//     let randomDigits = Math.floor(100 + Math.random() * 900);
//     let courseId = prefix + randomDigits;

// }


// const courseSchema = new Schema({
//     CourseId: {
//         type: String,
//         required: [true, "courseID is required"],
//         match: [/^CS-\d{3}$/, "Course ID format is not correct"],
//         default: generateRandomCourseID,
//     },

//     courseName: {
//         type: String,
//         lowercase: true,
//         required: [true, "course can't be empty"],
//     },

//     creditHourse:{
//         type:String,
//         required: [true , "credithourse can't be empty"]

//     },
//     section:{
//         type:String,
//         required: [true , "section can't be empty"]

//     }
// },{timestamps:true});

// const courseModel = mongoose.model('course',courseSchema);
// module.exports = courseModel;

const bcrypt = require("bcrypt");
const mongoose = require('mongoose');
const { Schema } = mongoose;

function generateRandomCourseID() {
    const prefix = 'CS-';
    let randomDigits = Math.floor(100 + Math.random() * 900);
    return prefix + randomDigits;
}

const courseSchema = new Schema({
    CourseId: {
        type: String,
        required: [true, "Course ID is required"],
        match: [/^CS-\d{3}$/, "Course ID format is not correct"],
        default: generateRandomCourseID,
    },
    userId: {
        type: String,
        required: [true, "User ID is required"],
    },
    courseName: {
        type: String,
        lowercase: true,
        required: [true, "Course name can't be empty"],
    },
    creditHours: {
        type: String,
        required: [true, "Credit hours can't be empty"],
    },
    section: {
        type: String,
        required: [true, "Section can't be empty"],
    },
    status: {
        type: String,
        enum: ['approved', 'pending'],
        default: 'pending',
    }
}, { timestamps: true });

const CourseModel = mongoose.model('Course', courseSchema);
module.exports = CourseModel;
