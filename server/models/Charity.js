const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const CharitySchema = new Schema({
  Password: {
    type: String,
  },
  Email: {
    type: String,
    // unique: true
  },
  CharityName: {
    type: String,
  },
  PurchaseOrder: {
    type: Array,
    default: []
  },
  Char_eth_Address: {
    type: String,
    default:''
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

module.exports.createCharity = function(newCharity, callback){
      bcrypt.hash(newCharity.Password, 10, function(err, hash) {
          newCharity.Password = hash;
          newCharity.save(callback);
      });
}

module.exports.getCharityByEmail = function(Email, callback){
  var query = {Email: Email};
  Charity.findOne(query, callback);
}

module.exports.getCharityById = function(id, callback){
  Charity.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
      if(err) throw err;
      callback(null, isMatch);
  });
}
