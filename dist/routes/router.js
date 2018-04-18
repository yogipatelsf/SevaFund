
const db = require('../models');

// router.get('/', (req, res) => {
// 	res.send("get request received")
// });
const dbApi = app => {

	app.get('/charities', (req, res) => {
		// res.send("get request received")
		db.Charity.find({}).then(results => {
			// console.log(" get response sent")
			res.json(results);
		});
	});

	app.post('/donors', (req, res) => {
		// console.log("logging req body")
		// console.log(req.body)
		db.Donor.create({
			Email: req.body.login.email,
			Username: req.body.login.username,
			Password: req.body.login.password
		}).then(results => {
			res.send("posted to database");
		});
	});

	// Matches with "/api/projects"
	app.get("/api/projects", (req, res) => {
		db.Project.find({}).then(dbModel => res.json(dbModel)).catch(err => res.status(422).json(err));
	});

	app.post("/api/projects", (req, res) => {
		db.Project.create(req.body).then(dbModel => res.json(dbModel)).catch(err => res.status(422).json(err));
	});

	//// Matches with "/api/projects/:id"
	app.get("/api/projects/:id", (req, res) => {
		db.Project.findById(req.params.id).then(dbModel => res.json(dbModel)).catch(err => res.status(422).json(err));
	});

	app.put("/api/projects/:id", (req, res) => {
		db.Project.findOneAndUpdate({ _id: req.params.id }, req.body).then(dbModel => res.json(dbModel)).catch(err => res.status(422).json(err));
	});

	return app;
};

module.exports = dbApi;
//https://appdividend.com/2017/06/28/mern-stack-tutorial/
//# sourceMappingURL=router.js.map