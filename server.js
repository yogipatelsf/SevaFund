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
import passport from'passport';
import { LocalStrategy } from'passport-local';
import env from './config/env';
import routes from './routes';

const configureServer = require('./cors');
const configureRoutes = require('./routes');
const SERVER_CONFIGS = require('./constants/server');
const db = require('./models');
const charityStrategy = require('./routes/passport/charityStrategy');
const donorStrategy = require('./routes/passport/donorStrategy');


//********************************************* * APP * ************************************************************************
const app = express();

app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.use(helmet()); // Helmet helps you secure your Express apps by setting various HTTP headers.
app.use(compression());
app.use(logger('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


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

// // load passport strategies -- changes to do
// const localSignupStrategy = require('./server/passport/local-signup');

// passport.use('local-signup', localSignupStrategy);
// 




app.use(cookieParser());
app.use(session({secret: 'keyboard cat', saveUninitialized: true, resave: true}));
app.use(flash());


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

app.use(passport.initialize());
app.use(passport.session());
passport.use('donor', donorStrategy);
passport.use('charity', charityStrategy);


//******************************************** *  End of Middleware  * ********************************************


//********************************** * Default dbseeds for testing * ****************************************** */
    db.Project.create({
            Title: "Covenant Food Pantry",
            Image: "https://farm6.staticflickr.com/5554/15071821931_9106dfb10b.jpg",
            Project:
              "With God’s grace, we seek to share Christ through a welcoming and nurturing community of faith, doing God’s work in the world.",
            Website: "http://www.covenantpcsf.org/Ministries/food_pantry.php",
            Amount: 12500
          })
      .then(results => {
        console.log("Data saved in db!!!")
      })

    db.Project.create({
            Title: "Project Open Hand",
            Image: "https://farm3.staticflickr.com/2391/2535419178_17da93473f.jpg",
            Project:
              "Project Open Hand’s mission is to nourish and engage our community by providing meals with love to the sick and the elderly. Watch our video celebrating Project Open Hand clients Orazgul and Mario and driver, 'Jedi.'",
            Website: "https://www.openhand.org/",
            Amount: 9000
          })
      .then(results => {
        console.log("Data saved in db!!!")
      })

    db.Project.create({
            Title: "SF Marine Food Bank",
            Image: "https://farm3.staticflickr.com/2789/4115935787_9065bde73d.jpg",
            Project:
              "Our mission is to end hunger in San Francisco and Marin. We envision a community where everyone is able to obtain enough nutritious food to support the health and well-being of themselves and their families.",
            Website: "https://www.sfmfoodbank.org/",
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