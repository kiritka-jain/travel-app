const express = require("express");
const tripController = require("../controllers/trip.controller.js");
const router = express.Router();



router.get("/all_trips",tripController.allTrips);

router.post("/add_trip",tripController.addTrip);

router.get("/get_user_trips",tripController.getTripsByUserId);

router.put("/update_user_trip/:id",tripController.updateTrip);


module.exports = router;