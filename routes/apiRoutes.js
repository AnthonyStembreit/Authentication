const { Router } = require('express');
const express = require('express');
const router = express.Router();
const User = require('../models/User')
var passport = require("../config/passport");
const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

router.post("/api/signup", async (req, res) => {
  try {
    let newUser = await User.findOrCreate({
      where: { email: req.body.email },
      defaults: req.body
    });
    console.log(newUser)
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
router.get("/api/user_data", function (req, res) {
  if (!req.user) {
    res.json({});
  } else {
    res.json({
      email: req.user.email,
      name: req.user.name
    });
  }
});

router.post("/api/user/password", async function (req, res) {
  const user = await User.findOne({
    where: {
      email: req.body.email
    }
  })
  console.log(user)
  if (!user.email) {
    res.status(401).json({});
  } else {
  console.log("hit")
    const message = {
      from: process.env.SENDER_ADDRESS,
      to: user.email,
      subject: "Password Reset",
      text: "this is a test"
      //'To reset your password, please click the link below.\n\nhttps://'+process.env.DOMAIN+'/user/reset-password?token='+encodeURIComponent(token)+'&email='+req.body.email
    };
    //send email
    transport.sendMail(message, function (err, info) {
      if (err) { console.log(err) }
      else { console.log(info); }
    });

    return res.json({ status: 'ok' });

  }
})
module.exports = router