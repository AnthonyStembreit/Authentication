const { Router } = require('express');
const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.post("/api/signup", async (req, res) => {
    try{
        console.log(req.body)
        let newUser = await User.findOrCreate({
            where:{email:req.body.email},
            defaults:req.body
        });
        console.log(newUser)
        res.json(newUser)
    } catch(error){
        console.log(error)
    }
})

router.post("/api/login", async (req, res) => {
    try{
        console.log(req.body)
        let user = await User.findOne({
            where:{
                email: req.body.email
            }
        })
        console.log(user)
        res.json(user)
    }catch(error){
        console.log(error)
    }
})

module.exports = router