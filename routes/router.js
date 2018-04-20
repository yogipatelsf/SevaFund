
const db = require('../models');
const { Donor } = require('../models');
const { Charity } = require('../models');

// router.get('/', (req, res) => {
// 	res.send("get request received")
// });
const dbApi = app => {

//***************************************=Test=******************************************************************************
	app.get('/charities', (req, res) => {
		// res.send("get request received")
		db.Charity.find({})
			.then(results => {
				// console.log(" get response sent")
				res.json(results);
			})	
		});
	
	

//***************************************=Projects******************************************************************************
	app.get("/api/projects", (req, res) => {			
		db.Project
		.find({})
		.then(dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err));
		})
		  
		 
	app.post("/api/projects", (req, res) => {
		db.Project
		.create(req.body)
		.then(dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err));
	});

	//// Matches with "/api/projects/:id"
    app.get("/api/projects/:id", (req, res) => {
		db.Project
		.findById(req.params.id)
		.then(dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err));
	})
	
	app.put("/api/projects/:id", (req, res) => {
		db.Project
		.findOneAndUpdate({ _id: req.params.id }, req.body)
		.then(dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err));
	})

//***************************************Registration/SignUp******************************************************
	app.post('/donor/register', (req, res) => {
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

			req.flash('success_msg', 'You are registered and can now login');
			res.redirect('/donor/login');
		
	});

	app.post('/charity/register', (req, res) => {
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
			req.flash('success_msg', 'You are registered and can now login');
			res.redirect('/charity/login');		
	});
//*********************************************************************************************************************

	return app

}

module.exports = dbApi;
//https://appdividend.com/2017/06/28/mern-stack-tutorial/