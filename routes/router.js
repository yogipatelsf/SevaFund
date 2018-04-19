
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

  	app.post('/donor/login', (req,res) => {
    	res.send('donor login route hit');
    })
    app.post('/charity/login',  (req,res) => {
        res.send("charity login route hit");
    })

//***************************************Registration/SignUp******************************************************
	app.post('/donor/register', (req, res) => {
		let Email = req.body.email;
		let Password = req.body.password;
		let passwordConfirm = req.confirmPassword;

		// Validation
		// req.checkBody('Email', 'Email is required').notEmpty();
		// req.checkBody('Email', 'Email is not valid').isEmail();
		// req.checkBody('password', 'Password is required').notEmpty();
		// req.checkBody('passwordConfirm', 'Passwords do not match').equals(confirmPassword);

		// let errors = req.validationErrors();

		// if(errors){
		// 	res.redirect('/donor/register',{
		// 		errors:errors
		// 	});
		// } else {
			let newDonor = new Donor ({
				Email:Email,
				Password: Password
			});
		
			db.Donor.createDonor(newDonor, function(err, donor){
				if(err) throw err;		
				console.log('Donor created in db with its hash', donor);
			});
			// console.log(req.flash('success_msg', 'You are registered and can now login'))
			req.flash('success_msg', 'You are registered and can now login');
			res.send('success');
		// }
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
	
			let newCharity = new Charity ({
				CharityName: charityName,
				Email: email,
				Password: password,
				CharityInfo: {
					Street: street,
					City: city,
					
					Zipcode: zipcode,
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