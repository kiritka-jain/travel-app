const express = require('express');
const userController = require("../controllers/user.controller.js");
const usertripRouter = require('./usertrip.routes.js');

const router = express.Router();


router.post("/add_user",userController.addUser);
router.get("/get_users", userController.getAll);
router.put("/update_user/:id", userController.updateUser);
router.get("/get_user/:id", userController.getUserById);

/* Nested Route to get all trips of a user*/

router.use('/:userId/trips', usertripRouter);


module.exports = router;
