const db = require("../models/index.js");
const { ValidationError, ServerError } = require("../errors/custom.errors.js");

class Trip {
  static async allTrips(res, req) {
    try {
      const trips = await db.Trip.findAll();
      return JSON.stringify(trips);
    } catch (err) {
      console.log("error:", err);
    }
  }
  static async addTrip(tripData) {
    try {
      const newTrip = await db.Trip.create(tripData);
      console.log(newTrip);
      return newTrip;
    } catch (error) {
      if (error.name === "SequelizeValidationError") {
        throw new ValidationError("Invalid trip data");
      }
      console.log("err", error);
      throw new ServerError("Error adding trip");
    }
  }
  static async getTripsById(userId) {
    try {
      const trips = await db.Trip.findAll({ where: { UserId: userId } });
      return JSON.stringify(trips);
    } catch (err) {
      console.log("error:", err);
    }
  }
  static async updateTrip(tripId, updateParams) {
    const updatedTrip = await db.Trip.update(updateParams, {
      where: { id: tripId },
    });
    console.log("updated Trip :", updatedTrip);
    if (updatedTrip[0] === 0) {
      throw new NotFoundError(" No user exist with this Id.");
    }
    return updatedTrip;
  }
  static async deleteTrip(tripId) {
    console.log("trip Id", tripId);
    try {
      const trip = await db.Trip.findOne({ where: { id: tripId } });
      if (trip) {
        trip.destroy();
        console.log("trip deleted sucessfully");
      }
    } catch (error) {
      throw new ServerError(error.message);
    }
  }
}

module.exports = Trip;
