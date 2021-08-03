const { Router } = require('express');
const express = require('express');
const router = express.Router();
const User = require('../models/User')
var passport = require("../config/passport");

router.post("/api/signup", async (req, res) => {
    try{
        let newUser = await User.findOrCreate({
            where:{email:req.body.email},
            defaults:req.body
        });
        res.json(newUser)
    } catch(error){
        console.log(error)
    }
})
router.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

module.exports = router