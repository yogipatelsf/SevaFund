const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const CharitySchema = new Schema({
	Name: {
		type: String,
		required: true
	},
	Supplier:{
		type: String,
	},
	PurchaseOrder:{
		type: Number
		validate: {
			validator: (input) => { //to check if the PO being entered is 10 digits long with numerical values
				return /\d{10}/.test(input);
			}, 
			message: '{Value} is not a valid PO. Use 10 numerical digits only' 
		},
		unique: true //we want the POs to be unique for each charity
	},
	EthereumAddress:{
		type: Number //what needs to be here?
	},
	DesiredItems:{
		type: Array,
		default: []
	},
	CurrentFunds:{
		type: Number,
	},
	TargetFund:{
		type: Number,
	},
	StripeInfo:{
		type: Array, //what needs to be here?
		default: []
	}
});

const Charity = mongoose.model("Charities", CharitySchema);

module.exports = Charity;