const { Router } = require('express');
const express = require('express');
const router = express.Router();
const User = require('../models/User')
var passport = require("../config/passport");

router.post("/api/signup", async (req, res) => {
    try {
        let newUser = await User.findOrCreate({
            where: { email: req.body.email },
            defaults: req.body
        });
        res.json(newUser)
    } catch (error) {
        console.log(error)
    }
})
router.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
});

router.get("/api/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});
router.get("/api/user_data", function(req, res) {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        name: req.user.name
      });
    }
  });

module.exports = router