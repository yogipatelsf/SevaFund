const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DonorSchema = new Schema({
  Password: {
    type: String
  },
  Email: {
    type: String
  },
  PurchaseOrders: {
    type: Array,
    default: []
  },
  don_eth_address: {
    type: String
  }
});

const Donor = mongoose.model("Donors", DonorSchema);

module.exports = Donor;
//# sourceMappingURL=Donor.js.map