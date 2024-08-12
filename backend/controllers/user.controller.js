const userService = require("../services/user.service.js");
const {
  BadRequest,
  Unauthorised,
  NotFoundError,
} = require("../errors/custom.errors.js");
const baseController = require("./baseController.js");

const userController = {
  addUser: baseController(async (req, res) => {
    const { name, loginId, password, roleId } = req.body;
    const newUser = await userService.addUser({ name,loginId,password,roleId});
    res.status(201).json(newUser);
  }),

  getAll: baseController(async (req, res) => {
      const allUsers = await userService.getAll(res, req);
      res.status(200).send(allUsers);
  }),
  updateUser: baseController(async (req, res) => {
      var userId = req.params.id;
      const updateParams = req.body;
      const update_user = await userService.updateUser(userId, updateParams);
      res.status(200).send(update_user);
  }),
  getUserById: baseController(async (req, res) => {
      var userId = req.params.id;
      const required_user = await userService.getUserById(userId);
      res.status(200).send(required_user);
  }),
  getToken: baseController(async (req, res) => {
      var loginId = req.body.loginId;
      var password = req.body.password;
      const required_user = await userService.getToken(loginId, password);
      console.log("Required User:", required_user);
      res.status(200).send(required_user);
  })
};
module.exports = userController;
