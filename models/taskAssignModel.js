// models/taskAssign.model.js
const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserModel = require('./user.model'); // Adjust the path as needed

const taskAssignSchema = new mongoose.Schema({
  Task: {
    type: String,
    lowercase: true,
    required: [true, "Task must be specified"],
  },
  UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel', 
    required: true,
  },
}, { timestamps: true });

const TaskAssignModel = mongoose.model('TaskAssign', taskAssignSchema);

module.exports = TaskAssignModel;
