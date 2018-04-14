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
		type: Number,
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