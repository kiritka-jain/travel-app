const db = require("../models/index.js");
const { ValidationError,ServerError } = require("../errors/custom.errors.js");
const { all } = require("q");

class User {
  static async addUser(userData) {
    try {
      const newUser = await db.User.create(userData);
      console.log(newUser);
      return newUser;
    } catch (error) {
      if (error.name === "SequelizeValidationError") {
        throw new ValidationError("Invalid user data");
      }
      console.log("err", error);
      throw new ServerError("Error adding user");
    }
  }
  static async getAll(req,res){
    try{
        const allUsers = await db.User.findAll();
        const ans  = JSON.stringify(allUsers);
        return ans;
    }catch(error){
        console.log("err", error); 
    }

  }
}
module.exports = User;
