const tripService = require("../services/trip.service.js");
const { ValidationError } = require("../errors/custom.errors.js");

const tripController = {
  allTrips: async (req, res) => {
    const trips = await tripService.allTrips(res, req);
    res.status(200).send(trips);
  },
  addTrip: async (req, res) => {
    const UserId = req.id;
    console.log(req.body);
    const { destination, StartsAt, EndsAt } = req.body;
    const tripInfo = await tripService.addTrip({
      UserId,
      destination,
      StartsAt,
      EndsAt,
    });
    res.status(201).json(tripInfo);
  },
  getTripsByUserId: async (req, res) => {
    const id = req.id;
    console.log("userId from extracted from token", id);
    const trips = await tripService.getTripsById(id);
    res.status(200).send(trips);
  },
  updateTrip: async (req, res) => {
    const UserId = req.id;
    const tripId = req.params.id;
    const updateParams = req.body;
    console.log(tripId, updateParams);
    const updatedTrip = await tripService.updateTrip(tripId, updateParams);
    res.status(200).send(updatedTrip);
  },
  deleteTrip: async (req, res) => {
    const UserId = req.id;
    const tripId = req.params.id;
    console.log("trip id from controller", tripId);
    const deletedTrip = await tripService.deleteTrip(tripId);
    res.status(200).send(deletedTrip);
  },
};
module.exports = tripController;
