const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
// const encrypt = require('../middlewares/encrypt')
const DonorSchema = new Schema({
	Username: {
		type: String,
		required: true,
		unique: true
	},
	Password:{
		type: String,
		required: true
		//Do we want a password requirement? Letters + numbers + upper case + lower case?
		//need to include salt hash encryption
	},
	Email:{
		type: String,
		required: true,
		unique: true,
		validate: {
			validator: (email) => { //to check for email address format
				var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  				return re.test(email);
			}, 
			message: '{Value} is not a valid email.' 
		},
	},
	// Name:{
	// 	type: String,
	// 	required: true
	// },
	Donated:{
		type: Array,
		default: []
	},
	PurchaseOrders:{
		type: Array,
		default: []
	}
});

const Donor = mongoose.model("Donors", DonorSchema);

module.exports = Donor;