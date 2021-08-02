const express = require('express');
const router = express.Router();

router.post("/api/signup", async (req, res) => {
    console.log(req.body)
    let newUser = Users.create(req.body)
    console.log(newUser)
})

router.post("/api/login", async (req, res) => {
    console.log(req.body)
    let user = Users.findOne({
        where:{
            email: req.body.email
        }
    })
    console.log(user)
    res.json(user)
})
