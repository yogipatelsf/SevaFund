import { SchemaType } from "mongoose";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  // _id: Schema.Types.ObjectId,
  // charity: { type: Schema.Types.ObjectId, ref: "Charity" },
  // donors: [{ type: Schema.Types.ObjectId, ref: "Donor" }],
  SupplierName: {
    // required: true,
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
    // required: true,
    type: Number
  },
  PONumber: {
    required: false,
    type: Number
  },
  image: {
    // required: true,
    type: String
  },
  project: {
    // required: true,
    type: String
  },
  DonorList: {
    type: Array
  }
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
