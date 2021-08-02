const express = require('express');
const path = require("path");


const db = require("./models");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(require('./routes/apiRoutes'));

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
})

