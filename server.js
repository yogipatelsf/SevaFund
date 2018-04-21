import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import favicon from 'serve-favicon';
import helmet from 'helmet';
import compression from 'compression';
import path from 'path';
import flash from 'connect-flash';
import session from'express-session';
import expressValidator from'express-validator';
import cookieParser from 'cookie-parser';
import env from './config/env';
import routes from './routes';

const configureServer = require('./cors');
const configureRoutes = require('./routes');
const SERVER_CONFIGS = require('./constants/server');
const db = require('./models');


//********************************************* * APP * ************************************************************************
const app = express();

app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.use(helmet()); // Helmet helps you secure your Express apps by setting various HTTP headers.
app.use(compression());
app.use(logger('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// serve static files, this is for frontend React
app.use('/static', express.static(path.join(__dirname, 'public', 'static')));

//************************************************* * DB * *******************************************************************

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/SevaFund";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, () =>{
  console.log("mongoose status code representations: 0 = disconnected/1 = connected/ 2 = connecting/ 3 = disconnecting. ")
  console.log("mongoose connection status: Current status is: ", mongoose.connection.readyState); 
});
//************************************************************************************************************************

app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

app.use(flash());
app.use(cookieParser());


////******************************************** * Middleware * ********************************************
// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

/*===========================
=            COR            =
===========================*/

// app.use(require('cors')());

/*=====  End of COR  ======*/

//******************************************** * Passport Authentication * ********************************************


//******************************************** *  End of Middleware  * ********************************************


//********************************** * Default dbseeds for testing * ****************************************** */
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
//************************************* Routes *************************************************** */

configureServer(app);
configureRoutes(app);

//*********************************************************************************************
// Load React App
// Serves HTML file for production
  if (env.name === 'production') {
    app.get('*', function response(req, res) {
      res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });
  }

  app.listen(SERVER_CONFIGS.PORT, error => {
    if (error) throw error;
    console.log(`🌎 ==> Server running on port ${SERVER_CONFIGS.PORT}`);
  });