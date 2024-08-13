const tripService = require("../services/trip.service.js");
const { ValidationError } = require("../errors/custom.errors.js");

const tripController = {
  allTrips: async (req, res) => {
    try {
      const trips = await tripService.allTrips(res, req);
      res.status(200).send(trips);
    } catch (err) {
      console.log("error:", err);
    }
  },
  addTrip: async (req, res) => {
    const UserId = req.id;
    console.log(req.body);
    const { destination, StartsAt, EndsAt } = req.body;
    try {
      const tripInfo = await tripService.addTrip({
        UserId,
        destination,
        StartsAt,
        EndsAt,
      });
      res.status(201).json(tripInfo);
    } catch (error) {
      if (error instanceof ValidationError) {
        res.status(400).json({ message: error.message });
      } else {
        console.error(error);
        res.status(500).json({ message: "Server error" });
      }
    }
  },
  getTripsByUserId: async (req, res) => {
    const id = req.id;
    console.log("user id from controller in trip", id);
    try {
      const trips = await tripService.getTripsById(id);
      res.status(200).send(trips);
    } catch (err) {
      console.log("error:", err);
    }
  }
};
module.exports = tripController;
