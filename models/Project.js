import { SchemaType } from "mongoose";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  // _id: Schema.Types.ObjectId,
  // charity: { type: Schema.Types.ObjectId, ref: "Charity" },
  // donors: [{ type: Schema.Types.ObjectId, ref: "Donor" }],
  SupplierName: {
    type: String
  },
  Email: {
    type: String,
    // unique: true
  },  
  Title: String,
  Supp_eth_address:{
     required: false, //needs to be true
     type: String
  },
  Contract_address:{
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
  Image: {
    type: String
  },
  Website: {
    type: String
  },
  Project: {
    type: String
  },
  DonorList: {
    type: Array
  }
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
