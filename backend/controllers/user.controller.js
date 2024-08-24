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
      const updateUser = await userService.updateUser(userId, updateParams);
      res.status(200).send(updateUser);
  }),
  getUserById: baseController(async (req, res) => {
      var userId = req.params.id;
      const requiredUser = await userService.getUserById(userId);
      res.status(200).send(requiredUser);
  }),
  getToken: baseController(async (req, res) => {
      var loginId = req.body.loginId;
      var password = req.body.password;
      const requiredUser = await userService.getToken(loginId, password);
      console.log("Required User:", requiredUser);
      res.status(200).send(requiredUser);
  }),
  logoutSeeeion: baseController(async(req,res)=>{
    const token = req.headers['authorization'] || req.headers['Authorization'];
    console.log('Token:', token);
    const requiredSession = await userService.logoutSession(token);
    res.status(200).send(requiredSession);
  }),
  getUserProfile: baseController(async(req,res)=>{
    var userId = req.params.id;
    const requiredProfile = await userService.getUserProfile(userId)
    res.status(200).send(requiredProfile);
  })
};
module.exports = userController;
