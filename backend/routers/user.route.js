const express = require('express');
const userController = require("../controllers/user.controller.js");

const router = express.Router();


router.post("/add_user",userController.addUser);
router.get("/get_users", userController.getAll);
router.put("/update_user", userController.updateUser);
router.get("/get_user_by_id", userController.getUserById);


module.exports = router;
