const userService = require("../services/user.service.js");

const Authentication = async(req,res,next)=>{
    const token = req.headers["authorization"] || req.headers["Authorization"];
    console.log("Token:", token);
    if (!token) {
      res.status(401).json({ message: "Invalid Token" });
      return;
    }

    const session = await userService.getSession(token);
    console.log("Session:", session);
    if (!session) {
      res.status(401).json({ message: "Invalid Token" });
      return;
    }
    req.id = session.UserId;
    next();

};
module.exports = Authentication;
