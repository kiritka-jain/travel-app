const express = require("express");

const router = express.Router();

router.use('/user',()=>{
    console.log("I am user router");
});
router.use('/trip',()=>{
    console.log("I am trip router");
});

module.exports = router;