// model.js

const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseId: {
    type: String,
    required: true,
    unique: true,
  },
  coursename: {
    type: String,
    required: true,
  },
  creditHours: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Course', courseSchema);
