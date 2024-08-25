const express = require('express');
const userController = require("../controllers/user.controller.js");
const Authentication = require("../middlewares/auth.middleware.js");

const router = express.Router();

router.post("/get_token", userController.getToken);
router.post("/add_user",userController.addUser);
router.get("/get_users", userController.getAll);
router.put("/update_user/", Authentication,userController.updateUser);
router.get("/get_user/:id", userController.getUserById);
router.delete('/logout_session',userController.logoutSeeeion);
router.get('/get_user_profile',Authentication,userController.getUserProfile);



module.exports = router;
