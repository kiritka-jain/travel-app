const userService = require ("../services/user.service.js");
const {BadRequest, Unauthorised, NotFoundError} = require("../errors/custom.errors.js");

const userController = {
    addUser: async (req, res) => {
      const { name, loginId , password , roleId} = req.body;
      try {
        const newUser = await userService.addUser({  name, loginId , password , roleId });
        res.status(201).json(newUser);
      } catch (error) {
        if (error instanceof BadRequest) {
          res.status(400).json({ message: error.message });
        } else {
          console.error(error);
          res.status(500).json({ message: "Server error" });
        }
      }
    },
    getAll: async(req,res)=>{
      try {
        const allUsers = await userService.getAll(res, req);
        res.status(200).send(allUsers)
      } catch (error) {
        res.status(500).json({ message: "Server error" });
      }
    },
    updateUser: async(req,res)=>{
      try{
        var userId = req.params.id;
        const updateParams = req.body;
        const update_user = await userService.updateUser(userId,updateParams);
        res.status(200).send(update_user);
      }catch(err){
        if (err instanceof NotFoundError) {
          res.status(404).json({ message: err.message });
        } else {
          console.error(err);
          res.status(500).json({ message: "Server error" });
        }
      }
    },
    getUserById: async(req,res)=>{
      try{
        var userId = req.params.id;
        const required_user = await userService.getUserById(userId);
        res.status(200).send(required_user);
      }catch(error){
        console.log("error:",error);
      }
    },
    getToken: async(req,res)=>{
      try{
        var loginId = req.body.loginId;
        var password = req.body.password;
        const required_user = await userService.getToken(loginId,password);
        console.log("Required User:",required_user);
        res.status(200).send(required_user);
      }catch (error) {
        if (error instanceof Unauthorised) {
          res.status(401).json({ message: error.message });
        } else {
          console.error(error);
          res.status(500).json({ message: "Server error" });
        }
      }
    }
}
module.exports = userController;