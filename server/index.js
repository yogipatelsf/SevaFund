const express = require('express');
const app = express();
const SERVER_CONFIGS = require('./constants/server');
const db = require('./models');
const configureServer = require('./server');
const configureRoutes = require('./routes');
const mongoose = require('mongoose');

//************************************************************************************************************************
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/SevaFund";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, () =>{
  console.log("mongoose status code representations: 0 = disconnected/1 = connected/ 2 = connecting/ 3 = disconnecting. ")
  console.log("mongoose connection status: Current status is: ", mongoose.connection.readyState);
  
});

//***********************************-Default dbseeds for testing -********************** */
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
//**************************************************************************************** */


configureServer(app);
configureRoutes(app);



//*********************************************************************************************
app.listen(SERVER_CONFIGS.PORT, error => {
  if (error) throw error;
  console.log('Server running on port: ' + SERVER_CONFIGS.PORT);
});