
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
		let passwordConfirm = req.body.password_confirm;

			let newDonor = new Donor ({
				Email:Email,
				Password: Password
			});

			if (passwordConfirm !== Password) {
				console.log('password fields do not match');
				return res.status(210).json({message: 'Passwords do not match'});
			}

			db.Donor.findOne({Email}, '_id', (err, donor) => {
				if(err) throw err;
				if (donor === null) {
					console.log('creating new donor', newDonor);
					db.Donor.createDonor(newDonor, function(err, donor){
						if(err) throw err;
						console.log('Donor created in db with its hash', donor);
						return res.status(200).json({ message: 'Donor registred successfully' });
					});
				} else {
					console.log('donor already exists');
					return res.status(210).json({message: 'User already exists'});
				}
			});
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
			res.json({ message: 'Charity registred successfuly' })
	});
//*********************************************************************************************************************

	return app

}

module.exports = dbApi;
//https://appdividend.com/2017/06/28/mern-stack-tutorial/