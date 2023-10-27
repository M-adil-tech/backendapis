const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

router.post("/register",UserController.register);
router.post("/login", UserController.login);
router.get("/getusers",UserController.getAllUsers);
router.get("/:userId",UserController.getUserById);
router.get("/:userId/role",UserController.getUserRole);
router.put("/:userId", UserController.updateUserById);

module.exports = router;

