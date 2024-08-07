const tripService = require("../services/trip.service.js");

const tripController = {
  allTrips: async (req, res) => {
    try {
      console.log("I am in trip controller.");
      const trips = await tripService.allTrips(res, req);
      res.status(200).send(trips);
    } catch (err) {
      console.log("error:", err);
    }
  },
  addTrip: async (req, res) => {
    console.log(req.body);
    const { UserId, destination , StartsAt , EndsAt} = req.body;
    try {
      const tripInfo = await tripService.addTrip({  UserId, destination , StartsAt , EndsAt });
      res.status(201).json(tripInfo);
    } catch (error) {
      if (error instanceof ValidationError) {
        res.status(400).json({ message: error.message });
      } else {
        console.error(error);
        res.status(500).json({ message: "Server error" });
      }
    }
  }
};
module.exports = tripController;
