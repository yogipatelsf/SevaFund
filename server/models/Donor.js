
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;
const DonorSchema = new Schema({
  Password: {
    type: String,
  },
  Email: {
    type: String,
  },
  Type: {
    type: String,
    default: 'Donor',
  },
  PurchaseOrders: {
    type: Array,
    default: []
  },
  Don_eth_address: {
    type: String,
    default:''
  }
});

const Donor = mongoose.model("Donors", DonorSchema);

module.exports = Donor;

module.exports.createDonor = function(newDonor, callback){
  console.log('donorModel', newDonor);
  
    bcrypt.hash(newDonor.Password, 10, function(err, hash) {
        newDonor.Password = hash;
        newDonor.save(callback);
    });

}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
      if(err) throw err;
      callback(null, isMatch);
  });
}

module.exports.getDonorByEmail = function(Email, callback){
  var query = {Email: Email};
  Donor.findOne(query, callback);
}

module.exports.getDonorById = function(id, callback){
  Donor.findById(id, callback);
}

