const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const DonorSchema = new Schema({
	Username: {
		type: String,
		required: true
	},
	Password:{
		type: String,
		requried: true
	},
	Email:{
		type: String,
		requried: true
	},
	Name:{
		type: String,
		requried: true
	},
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

exports default Donor;