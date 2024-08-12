const db = require("../models/index.js");
const { Unauthorised, ServerError, BadRequest,NotFoundError } = require("../errors/custom.errors.js");
const { all } = require("q");
const { TIME, Op } = require("sequelize");
const getTimeWithAddedHours = require("./helperfunction.js");

class User {
  static async addUser(userData) {
    try {
      const newUser = await db.User.create(userData);
      console.log(newUser);
      return newUser;
    } catch (error) {
      if (error.name === "SequelizeValidationError") {
        throw new Unauthorised("Invalid user data");
      }
      console.log("err", error);
      throw new ServerError("Error adding user");
    }
  }
  static async getAll(req, res) {
    try {
      const allUsers = await db.User.findAll();
      const ans = JSON.stringify(allUsers);
      return ans;
    } catch (error) {
      console.log("err", error);
    }
  }
  static async updateUser(userId, updateParams) {
    console.log(userId, updateParams);
      const updatedUser = await db.User.update(updateParams, {
        where: { id: userId },
      });
      console.log(updatedUser);
      if (updatedUser[0] === 0) {
        throw new NotFoundError(" No user exist with this Id.");
      }
      return " Updated user sucessfully.";
  }
  static async getUserById(userId) {
    try {
      const requiredUser = await db.User.findOne({ where: { id: userId } });
      return JSON.stringify(requiredUser);
    } catch (err) {
      console.log("error:", err);
    }
  }
  static async getToken(userId, pswd) {
      const requiredUser = await db.User.findOne({
        where: {
          loginId: userId,
          password: pswd,
        },
      });
      if (!requiredUser) {
        console.log(requiredUser);
        throw new Unauthorised("Invalid user data");
      }
      console.log(requiredUser.id);
      const currentTime = getTimeWithAddedHours(0);
      const session = await db.Session.findOne({
        where: {
          UserId: requiredUser.id,
          expiresAt: {
            [Op.gt]: currentTime,
          },
        },
      });

      if (session) {
        return session;
      }
      const sessionData = {
        UserId: requiredUser.id,
      };
      console.log("sessionData:", sessionData);
      const newSession = await db.Session.create(sessionData);
      console.log(newSession);
      return newSession;
  }
}
module.exports = User;
