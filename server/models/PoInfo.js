import { SchemaType } from "mongoose";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PoInfoSchema = new Schema({
  _id: Schema.Types.ObjectId,
  charity: { type: Schema.Types.ObjectId, ref: "Charity" },
  donors: [{ type: Schema.Types.ObjectId, ref: "Donor" }],
  SupplierName: {
    required: true,
    type: String
  },
  Amount: {
    required: true,
    type: Number
  },
  PONumber: {
    required: true,
    type: Number
  },
  image: {
    required: true,
    type: String
  },
  project: {
    required: true,
    type: String
  },
  DonorList: {
    type: Array
  }
});

const PoInfo = mongoose.model("PoInfo", PoInfoSchema);

module.export = PoInfo;
