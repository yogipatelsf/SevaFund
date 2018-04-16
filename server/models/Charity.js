const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharitySchema = new Schema({
  Password: {
    type: String,
  },
  Email: {
    type: String,
    unique: true,
  },
  charityName: {
    type: String,
  },
  PurchaseOrder: {
    type: Array
  },
  char_eth_Address: {
    type: String
  },
  CharityInfo: {
    Address: {
      type: String
    },
    City: {
      type: String
    },
    State: {
      type: String
    },
    ZipCode: {
      type: Number
    },
    PhoneNumber: {
      type: Number
    }
  }
});

const Charity = mongoose.model("Charities", CharitySchema);

module.exports = Charity;
