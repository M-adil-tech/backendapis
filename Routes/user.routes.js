const router = require("express").Router();
const UserController = require('../controller/user.controller');

router.post("/register",UserController.register);

router.post("/login", UserController.login);
router.get("/getusers",UserController.getAllUsers);
router.get("/:userId",UserController.getUserById);
router.get("/:userId/role",UserController.getUserRole);
router.put("/:userId", UserController.updateUserById);