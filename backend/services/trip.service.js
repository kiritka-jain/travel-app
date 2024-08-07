const db = require("../models/index.js");
const {ValidationError,ServerError} = require("../errors/custom.errors.js");


class Trip{
    static async allTrips(res,req){
        try{
            const trips = await db.Trip.findAll();
            return JSON.stringify(trips);
        }catch(err){
            console.log("error:",err);
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

}}

module.exports = Trip;