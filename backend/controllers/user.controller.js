const userService = require ("../services/user.service.js");
const {ValidationError} = require("../errors/custom.errors.js");

const userController = {
    addUser: async (req, res) => {
      const { name, loginId , password , roleId} = req.body;
      try {
        const newUser = await userService.addUser({  name, loginId , password , roleId });
        res.status(201).json(newUser);
      } catch (error) {
        if (error instanceof ValidationError) {
          res.status(400).json({ message: error.message });
        } else {
          console.error(error);
          res.status(500).json({ message: "Server error" });
        }
      }
    },
    getAll: async(req,res)=>{
      try {
        console.log("calling user service from controller.")
        const allUsers = await userService.getAll(res, req);
        res.status(200).send(allUsers)
      } catch (error) {
        res.status(500).json({ message: "Server error" });
      }
    }
}
module.exports = userController;