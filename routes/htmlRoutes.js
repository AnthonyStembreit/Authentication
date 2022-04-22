// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
const express = require('express');
const router = express.Router();
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/dashboard", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/dashboard.html"));
});
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
router.get("/password", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
router.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
router.get("/signup", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
router.get("/reset-password", function (req, res) {
    //http://localhost:3001/reset-password/?token={token}&email=dragonstembrite@gmail.com
    res.sendFile(path.join(__dirname, "../public/reset-password.html"));
});
module.exports = router


