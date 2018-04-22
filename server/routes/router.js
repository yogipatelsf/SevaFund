const express = require('express');
const router = express.Router();
const db = require('../models');
const { Donor } = require('../models');
const { Charity } = require('../models');
const jwt = require("jsonwebtoken");

router.get('/charities', (req, res) => {
	// res.send("get request received")
	db.Charity.find({})
		.then(results => {
			// console.log(" get response sent")
			res.send(results);
		})	
	});
	
router.get("/api/projects", (req, res) => {			
		db.Project
		.find({})
		.then(dbModel => res.send(dbModel))
		.catch(err => res.status(422).json(err));
		})
		  
		 
router.post("/api/projects", (req, res) => {
	db.Project
	.create(req.body)
	.then(dbModel => res.send(dbModel))
	.catch(err => res.status(422).json(err));
});

	//// Matches with "/api/projects/:id"
router.get("/api/projects/:id", (req, res) => {
	db.Project
	.findById(req.params.id)
	.then(dbModel => res.send(dbModel))
	.catch(err => res.status(422).json(err));
})
	
router.put("/api/projects/:id", (req, res) => {
	db.Project
	.findOneAndUpdate({ _id: req.params.id }, req.body)
	.then(dbModel => res.send(dbModel))
	.catch(err => res.status(422).json(err));
})

router.post('/donor/register', (req, res) => {
	let Email = req.body.email;
	let Password = req.body.password;
	let passwordConfirm = req.confirmPassword;

	let newDonor = new Donor ({
		Email:Email,
		Password: Password
	});

	db.Donor.createDonor(newDonor, function(err, donor){
		if(err) throw err;		
		console.log('Donor created in db with its hash', donor);
	});

	res.json({ message: 'Donor registred successfuly' })
});

router.post('/charity/register', (req, res) => {
	const charityName =  req.body.name
	const email =  req.body.email
	const password = req.body.password
	const street =  req.body.street
	const city =  req.body.city
	const state =  req.body.state
	const zipcode=  req.body.zipcode
	const phoneNumber =  req.body.phoneNumber
//confirmPassword: confirmPassword for validation 
	console.log('register charity ', req.body)
	let newCharity = new Charity ({
		CharityName: charityName,
		Email: email,
		Password: password,
		CharityInfo: {
			Address: street,
			City: city,
			ZipCode: zipcode,
			PhoneNumber: phoneNumber,
			State: state
		}				
	});

	db.Charity.createCharity(newCharity, function(err, Charity){
		if(err) throw err;
		console.log('charity created in db', Charity);
	});
	res.json({ message: 'Charity registred successfuly' })	
});

router.post("/donor/login", (req, res) => {
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

  router.post("/charity/login", (req, res) => {
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


module.exports = router;

