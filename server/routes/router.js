
const db = require('../models');

// router.get('/', (req, res) => {
// 	res.send("get request received")
// });
const dbApi = app => {

	app.get('/charities', (req, res) => {
		// res.send("get request received")
		db.Charity.find({})
			.then(results => {
				// console.log(" get response sent")
				res.send(results);
			})
	
	});
	
	app.post('/donors', (req, res) => {
		// console.log("logging req body")
		// console.log(req.body)
		db.Donor.create({
			Email: req.body.login.email,
			Username: req.body.login.username,
			Password: req.body.login.password
		})
			.then(results => {
				res.send("posted to database");
			})
	
	});

	return app

}



module.exports = dbApi;

//https://appdividend.com/2017/06/28/mern-stack-tutorial/