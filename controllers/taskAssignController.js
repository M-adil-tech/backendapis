// controllers/taskAssignController.js
const TaskAssignService = require('../Services/taskAssignService');

class TaskAssignController {
  static async assignTaskToUser(req, res) {
    const { Task, UserId } = req.body;
    try {
      const taskAssign = await TaskAssignService.assignTaskToUser(Task, UserId);
      res.json(taskAssign);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  //Controller for get user having  task  search by id
  static async getTasksForUser(req, res) {
    const { userId } = req.params;
    try {
      const tasks = await TaskAssignService.getTasksForUser(userId);
      res.json(tasks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  //Controller for All the user having Task Assign
  static async getAllTasks(req, res) {
    try {
      const allTasks = await TaskAssignService.getAllTasks();
      res.json(allTasks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  static async editTaskAssignment(req, res) {
    const { taskAssignId } = req.params;
    const updatedTask = req.body;
    try {
      const updatedTaskAssign = await TaskAssignService.editTaskAssignment(taskAssignId, updatedTask);
      res.json(updatedTaskAssign);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = TaskAssignController;
