const db = require("../models/index.js");
const {
  Unauthorised,
  ServerError,
  BadRequest,
  NotFoundError,
} = require("../errors/custom.errors.js");
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
      throw new ServerError("Error adding user");
    }
  }

  static async getAll(req, res) {
      const allUsers = await db.User.findAll();
      const users = JSON.stringify(allUsers);
      return users;
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
    const requiredUser = await db.User.findOne({ where: { id: userId } });
    if (!requiredUser) {
      throw new NotFoundError(" No user exist with this Id.");
    }
    return JSON.stringify(requiredUser);
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
    const currentTime = new Date();
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
      expiresAt: getTimeWithAddedHours()
    };
    console.log("sessionData:", sessionData);
    const newSession = await db.Session.create(sessionData);
    console.log(newSession);
    return newSession;
  }
  static async logoutSession(token){
    const session = await this.getSession(token);
    if (session) {
      session.destroy();
      console.log("session destroyed");
    }

  }
  static async getSession(token){
    const currentTime = new Date();
    console.log(currentTime);
    console.log("ser token:",token);
    const session = await db.Session.findOne({
      where: {
        token: token,
        expiresAt: {
          [Op.gt]: currentTime,
        },
      },
    });
    return session
  }
  static async getUserProfile(userId){
    const requiredUser = await db.User.findOne({ where: { id: userId } });
    if (!requiredUser) {
      throw new NotFoundError(" No user exist with this Id.");
    }
    return JSON.stringify(requiredUser.roleId);
  }

}
module.exports = User;
