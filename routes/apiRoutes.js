const { Router } = require('express');
const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.post("/api/signup", async (req, res) => {
    console.log(req.body)
    let newUser = User.create(req.body)
    console.log(newUser)
    res.json(newUser)
})

router.post("/api/login", async (req, res) => {
    console.log(req.body)
    let user = req.body
    let user = User.findOne({
        where:{
            email: req.body.email
        }
    })
    console.log(user)
    res.json(user)
})

module.exports = router