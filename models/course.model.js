const mongoose = require('mongoose');
const { UserModel } = require('../models/user.model'); // Update the path accordingly
const { Schema } = mongoose;

function generateRandomCourseID(subjectCode) {
    const prefix = 'CS-';
    return `${prefix}${subjectCode}`;
}

const courseSchema = new Schema({
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: UserModel, // Correctly reference the UserModel
    //     required: true,
    // },

    subjectCode: {
        type: String,
        required: [true, "Subject code is required"],
        unique: true,
    },

    courseId: {
        type: String,
        required: true,
        unique: true,
        default: function () {
            return generateRandomCourseID(this.subjectCode);
        },
    },

    courseName: {
        type: String,
        uppercase: true,
        required: true,
    },

    creditHours: {
        type: Number,
        required: true,
        min: 1,
        max: 9,
    },

    section: {
        type: String,
        uppercase: true,
        enum: ['A', 'B', 'C'],
        required: true,
    },

    status: {
        type: String,
        enum: ['approved', 'pending'],
        default: 'pending',
    },
}, { timestamps: true });

const CourseModel = mongoose.model('course', courseSchema);
module.exports = CourseModel;
