// Routes/taskAssignRoute.js
const express = require('express');
const TaskAssignController = require('../controllers/taskAssignController');

const router = express.Router();

// Admin assigns a task to a user
router.post('/assignTask', TaskAssignController.assignTaskToUser);
// Get assigned tasks for a specific user (for the student portal)
router.get('/getTasks/:userId', TaskAssignController.getTasksForUser);
// Get all tasks

// Admin edits a task assignment
router.put('/editTaskAssignment/:taskAssignId', TaskAssignController.editTaskAssignment);

module.exports = router;
 