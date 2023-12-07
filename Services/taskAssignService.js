const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
const TaskAssignModel = require("../models/taskAssignModel");

class TaskAssignService {
  static async assignTaskToUser(Task, UserId) {
    try {
      const newTaskAssign = new TaskAssignModel({ Task, UserId });
      return await newTaskAssign.save();
    } catch (err) {
      throw err;
    }
  }
  //get user having  task by id
  static async getTasksForUser(userId) {
    try {
      const tasks = await TaskAssignModel.find({ UserId: userId });
      return tasks;
    } catch (err) {
      throw err;
    }
  }
 //get all user having Task  
 static async getAllTasksa(userId) {
  try {
    return await TaskAssignModel.find();
  } catch (err) {
    throw err;
  }
}

// static async getAllTasks() {
//   try {
//     return await TaskAssignModel.find({}).populate('UserId');
//   } catch (err) {
//     throw err;
//   }
// }
// //edit task 
static async editTaskById(taskAssignId, updatedTask) {
  try {
    return await TaskAssignModel.findByIdAndUpdate(
      taskAssignId,
      { $set: updatedTask },
      { new: true }
    ).populate('UserId');
  } catch (err) {
    throw err;
  }
}
}

module.exports = TaskAssignService;
