const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharitySchema = new Schema({
  Password: {
    type: String,
    // required: true,
    maxLength: 20,
    minLength: 6
  },
  Email: {
    type: String,
    // required: true,
    //  unique: true,
    // validate: {
    //   validator: email => {
    //     //to check for email address format
    //     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return re.test(email);
    //   },
    //   message: "{Value} is not a valid email."
    // }
  },
  charityName: {
    type: String,
    // required: true
  },
  PurchaseOrder: {
    type: Array
  },
  char_eth_Address: {
    type: String
  },
  CharityInfo: {
    Address: {
      // required: true,
      type: String
    },
    City: {
      // required: true,
      type: String
    },
    State: {
      // required: true,
      type: String
    },
    ZipCode: {
      // required: true,
      type: Number
    },
    PhoneNumber: {
      // required: true,
      type: Number
    }
  }
});

const Charity = mongoose.model("Charities", CharitySchema);

module.exports = Charity;
