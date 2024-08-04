const express = require("express");

const router = express.Router();

router.use('/user',()=>{
    console.log("I am user router")
});

module.exports = router;