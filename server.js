const express = require('express');
const path = require("path");

// const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection/connection');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// app.use(routes);

app.listen(PORT, () => {
    sequelize.sync({ force: false })
    console.log(`App listening on port ${PORT}!`);
  });

