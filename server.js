const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
const db = require('./server/models');
const cors = require('cors');
// const axios = require('axios')
const bodyParser = require('body-parser');
const router = require('./server/routes/router')
const session = require('express-session');
const expressValidator = require('express-validator');
const cookieParser = require('cookie-parser');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

app.use(cookieParser());

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/SevaFund";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);
console.log("mongoose status code representations: 0 = disconnected/1 = connected/ 2 = connecting/ 3 = disconnecting. ")
console.log("mongoose connection status: Current status is: ", mongoose.connection.readyState);

db.Project.create({
        title: "Covenant Food Pantry",
        image: "https://farm6.staticflickr.com/5554/15071821931_9106dfb10b.jpg",
        project:
          "With God’s grace, we seek to share Christ through a welcoming and nurturing community of faith, doing God’s work in the world.",
        website: "http://www.covenantpcsf.org/Ministries/food_pantry.php",
        Amount: 12500
      })
  .then(results => {
    console.log("Data saved in db!!!")
  })

db.Project.create({
        title: "Project Open Hand",
        image: "https://farm3.staticflickr.com/2391/2535419178_17da93473f.jpg",
        project:
          "Project Open Hand’s mission is to nourish and engage our community by providing meals with love to the sick and the elderly. Watch our video celebrating Project Open Hand clients Orazgul and Mario and driver, 'Jedi.'",
        website: "https://www.openhand.org/",
        Amount: 9000
      })
  .then(results => {
    console.log("Data saved in db!!!")
  })

db.Project.create({
        title: "SF Marine Food Bank",
        image: "https://farm3.staticflickr.com/2789/4115935787_9065bde73d.jpg",
        project:
          "Our mission is to end hunger in San Francisco and Marin. We envision a community where everyone is able to obtain enough nutritious food to support the health and well-being of themselves and their families.",
        website: "https://www.sfmfoodbank.org/",
        Amount: 10000
      })
  .then(results => {
    console.log("Data saved in db!!!")
  })  

db.Project.create({
      title: "OneApp",
      image: "https://i.gyazo.com/aa975aff043989f8416b26566d2d370c.jpg",
      project:
        "OneApp is a modernized social network that helps users create a profile that serves as their college applications. The application is a gateway between schools and students to find the best match university.",
      website: "https://cryptic-atoll-45563.herokuapp.com/",
      Amount: 10000
    })
.then(results => {
  console.log("Data saved in db!!!")
})

db.Project.create({
      title: "Semilla de Bienestar",
      image: "https://pbs.twimg.com/profile_images/721467019586072576/9El8LAoC_400x400.jpg",
      project:
        "Semilla de Bienestar is a non-profit corporation considered in the category 501 (c) (3) whose commitment is to contribute to the development of healthy communities through information, education, training, awareness, orientation, empowerment, awareness and take of action before the complex situations and multiple challenges that cross the diverse communities in Puerto Rico and its wide diaspora. Our proposal reiterates a firm commitment to collaboration and mutual cooperation in projects, initiatives, laws and programs that seek the common good, justice and better living conditions for the diverse Latino and Hispanic community in the United State.",
      website: "http://semilladebienestar.org/",
      Amount: 10000
    })
.then(results => {
  console.log("Data saved in db!!!")
})


app.use(router)

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

