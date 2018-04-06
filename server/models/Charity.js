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
	},
	EthereumAddress:{
		type: Number //
	},
	DesiredItems:{
		type: Array,
		default: []
	},
	CurrentFunds:{
		type: Number,
	},
	StripeInfo:{
		type: Array,
		default: []
	}
});

const Charity = mongoose.model("Charities", CharitySchema);

exports default Charity;