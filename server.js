const express = require('express');
const path = require("path");
var session = require("express-session");
var passport = require("./config/passport");

const PORT = process.env.PORT || 3001;
const db = require("./models");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(require('./routes/apiRoutes'));
app.use(require('./routes/htmlRoutes'));

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
})

