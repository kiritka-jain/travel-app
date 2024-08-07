const express = require("express");
const tripController = require("../controllers/trip.controller.js");
const router = express.Router();


router.get("/all_trips",tripController.allTrips);


module.exports = router;