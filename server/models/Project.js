const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  // _id: Schema.Types.ObjectId,
  // charity: { type: Schema.Types.ObjectId, ref: "Charity" },
  // donors: [{ type: Schema.Types.ObjectId, ref: "Donor" }],
  SupplierName: {
    type: String
  },
  title: String,
  supp_eth_address:{
     required: false, //needs to be true
     type: String
  },
  contract_address:{
    required: false, //needs to be true
    type: String
  },
  Amount: {
    type: Number
  },
  PONumber: {
    required: false,
    type: Number
  },
  image: {
    type: String
  },
  website: {
    type: String
  },
  project: {
    type: String
  },
  DonorList: {
    type: Array
  }
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
