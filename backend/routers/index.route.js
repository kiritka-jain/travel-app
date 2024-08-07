const express = require("express");
const userRouter = require("./user.route.js");
const tripRouter = require("./trip.route.js");

const router = express.Router();

router.use('/user',userRouter);
router.use('/trip',()=>{
    console.log("I am trip router");
});

module.exports = router;