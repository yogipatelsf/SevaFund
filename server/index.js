const express = require('express');
const app = express();
const SERVER_CONFIGS = require('./constants/server');
const db = require('./models');
const configureServer = require('./server');
const configureRoutes = require('./routes');
const mongoose = require('mongoose');


const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/SevaFund";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, () =>{
  console.log("mongoose status code representations: 0 = disconnected/1 = connected/ 2 = connecting/ 3 = disconnecting. ")
  console.log("mongoose connection status: Current status is: ", mongoose.connection.readyState);
  
});

db.Charity.create({
	Name: "Test Charity"
	})
	.then(results => {
		console.log("creating db entry")
	})

// db.Charity.find({})
// 	.then(results => {
// 		console.log("logging db search results")
// 		console.log(results)
// 	})

configureServer(app);
// app.use(require('cors')());
configureRoutes(app);


app.listen(SERVER_CONFIGS.PORT, error => {
  if (error) throw error;
  console.log('Server running on port: ' + SERVER_CONFIGS.PORT);
});