const jwt = require("jsonwebtoken");
const Donor = require("../models/Donor");
const Charity = require("../models/Charity");

const AuthApi = app => {
  //*************************************//Authentification//********************************************
  //Verify Token Middleware
  // function verifyToken(req, res, next) {
  //     const bearerHeader = req.headers['authorization'];
  //     if(typeof bearerHeader !== 'undefined'){
  //         const bearer = bearerHeader.split(' ');
  //         const bearerToken = bearer[1];
  //         req.token = bearerToken;
  //         next();
  //     } else {
  //         res.sendStatus(403)
  //     }
  // }

  // app.get('/donor/login', verifyToken, (req, res) => {
  //         jwt.verify(req.token, 'secretkey', (err, authdata) => {
  //             if(err) {
  //                 res.sendStatus(403)
  //             }else {
  //                 res.json({
  //                     message: 'this route needs to be taking care of',
  //                     authdata
  //                 })
  //             }
  //         })

  // })

  app.get("/charity/login", (req, res) => {
    res.json({
      message: "this route needs to be taking care of"
    });
  });

  app.post("/donor/login", (req, res) => {
    const donor = {
      Email: req.body.email,
      Password: req.body.password
    };

    Donor.getDonorByEmail(donor.Email, (err, user) => {
      if (!user) {
        return res.json({ error: "Please register first", isLoggedIn: "fail" });
      }
      if (err) throw err;

      Donor.comparePassword(donor.Password, user.Password, (err, isMatch) => {
        if (err) throw err;
        if (isMatch) {
          jwt.sign({ user_id: user._id }, "secretkey", (err, token) => {
            res.json({
              token,
              isLoggedIn: "success"
            });
          });
        } else if (!isMatch) {
          res.json({
            messsage: "Email or Password incorrect!",
            isLoggedIn: "fail"
          });
        }
      });
    });
  });

  app.post("/charity/login", (req, res) => {
    const charity = {
      Email: req.body.email,
      Password: req.body.password
    };

    Charity.getCharityByEmail(charity.Email, (err, user) => {
      if (!user) {
        return res.json({
          error: "Please register first",
          isLoggedIn: "fail"
        });
      }
      if (err) throw err;
      Charity.comparePassword(
        charity.Password,
        user.Password,
        (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            jwt.sign({ user_id: user._id }, "secretkey", (err, token) => {
              res.json({ token, isLoggedIn: "success" });
            });
          } else if (!isMatch) {
            res.json({
              messsage: "Email or Password incorrect!",
              isLoggedIn: "fail"
            });
          }
        }
      );
    });
  });

  //*************************************--login/logout routes--********************************************

  app.get("/logout", (req, res) => {
    req.logout();

    req.flash("success_msg", "You are logged out");

    res.redirect("/");
  });
  //******************************************************************************************************

  return app;
};

module.exports = AuthApi;
