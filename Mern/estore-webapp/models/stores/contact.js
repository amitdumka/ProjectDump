const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require('../enums')


let contactSchema = new Schema(
  {
    contactId: { type: Number, require: false,default:0},
    firstName: { type: String , require: true},
    lastName: { type: String,require:false },
    mobileNo: { type: String ,require: true},
    phoneNo: { type: String ,require: false},
    eMailAddress: { type: String ,require: false},
    remarks: { type: String ,require:false},
    createdAt: { type: Date, default: new Date() },
  },
  {
    collection: "contacts",
  }
);

module.exports = mongoose.model("contact", contactSchema);
