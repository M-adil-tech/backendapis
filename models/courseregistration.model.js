const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseId: {
        type: String,
        required: true,
        unique: true,
    },
    courseName: {
        type: String,
        required: [true , "Course Name can't be empty"],
    },
    creditHours: {
        type: Number,
        required: [true , "Course Hours is required"],
    },
    status: {
        type: String,
        enum: ['approved', 'pending'],
        default: 'pending',
    },
},{timestamps:true});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;

