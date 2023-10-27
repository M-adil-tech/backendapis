const bcrypt = require("bcrypt");
const mongoose = require('mongoose');
const { Schema } = mongoose;

function generateRandomCourseID() {
    const prefix = 'CS-';
    const randomDigits = Math.floor(100 + Math.random() * 900); 
    return prefix + randomDigits;
}


const courseSchema = new Schema({
    
    courseName: {
        type: String,
        lowercase: true,
        required: [true, "course can't be empty"],
    },
    CourseId: {
        type: String,
        required: [true, "courseID is required"],
        match: [/^CS-\d{3}$/, "Course ID format is not correct"],
        default: generateRandomCourseID,
    },

    creditHourse:{
        type:String,
        required: [true , "credithourse can't be empty"]

    },
    section:{
        type:String,
        required: [true , "section can't be empty"]

    }
},{timestamps:true});







const courseModel = mongoose.model('course',courseSchema);
module.exports = courseModel;