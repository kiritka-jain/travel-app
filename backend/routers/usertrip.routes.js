const express = require("express");
const tripController = require("../controllers/trip.controller.js");
const router = express.Router({ mergeParams: true });


router.post("/add_trip",(req,res)=>{
    tripController.addTrip(req,res)});

router.get("/get_trips",(req,res)=>{
    tripController.getTripsByUserId(req,res)});

module.exports = router;