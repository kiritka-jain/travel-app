const {
  BadRequest,
  Unauthorised,
  NotFoundError,
  TimeOut,
  Forbidden,
} = require("../errors/custom.errors.js");

const baseController = (controllerFunc) => {
  return async (req, res, next) => {
    try {
      await controllerFunc(req, res, next);
    } catch (error) {
      if (error instanceof BadRequest) {
        res.status(400).json({ message: error.message });
      } else if (error instanceof Unauthorised) {
        res.status(401).json({ message: error.message });
      } else if (error instanceof NotFoundError) {
        res.status(404).json({ message: error.message });
      } else if (error instanceof Forbidden) {
        res.status(403).json({ message: error.message });
      } else if (error instanceof TimeOut) {
        res.status(408).json({ message: error.message });
      } else {
        console.error(error);
        res.status(500).json({ message: "Server error" });
      }
    }
  };
};

module.exports = baseController;
