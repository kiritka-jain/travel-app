const express = require("express");
const userRouter = require("./user.route.js");
const tripRouter = require("./trip.route.js");
const Authentication = require("../middlewares/auth.middleware.js");

const router = express.Router();

router.use('/user',userRouter);
router.use('/trip',Authentication,tripRouter);

module.exports = router;