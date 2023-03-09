const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require('../enums')

// const EmpType = Object.freeze({
//   StoreManager: 1,
//   Salesman: 2,
//   HouseKeeping: 3,
//   Accountant:4,
//   Owner: 0,
//   Other: 7,
// });

let employeeSchema = new Schema(
  {
    employeeCode: { type: String, require: false },
    employeeId: { type: Number, require: false },
    firstName: { type: String },
    lastName: { type: String },
    mobileNo: { type: String },
    joiningDate: { type: Date },
    leavingDate: { type: Date, require: false },
    isWorking: { type: Boolean, default: true },
    category: {
      type: Number,
      enum: Object.values(EmpType),
      default: EmpType.Other,
    },
    isTailors: { type: Boolean, default: false },
    eMail: { type: String, require: false },
    dateOfBirth: { type: Date, require: false },
    adharNumber: { type: String, require: false },
    panNo: { type: String, require: false },
    otherIdDetails: { type: String, require: false },
    address: { type: String, require: false },
    city: { type: String },
    state: { type: String, require: false },
    fatherName: { type: String, require: false },
    highestQualification: { type: String, require: false },
    storeCode: { type: String },
    createdAt: { type: Date, default: new Date() },
  },
  {
    collection: "employees",
  }
);

module.exports = mongoose.model("employee", employeeSchema);
