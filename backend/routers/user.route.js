const express = require('express');
const userController = require("../controllers/user.controller.js");

const router = express.Router();


router.post("/add_user",userController.addUser);
router.get("/get_users", userController.getAll);


module.exports = router;
