const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let companySchema = new Schema({id:{type:Number,required:false},name:{type:String,required:false},address:{type:String,required:false},phoneNo:{type:String,required:false},contactPersonName:{type:String,required:false},contactPersonEmail:{type:String,required:false},contactPersonPhoneNo:{type:String,required:false},webSite:{type:String,required:false},},{collection:"company"});
module.exports = mongoose.model("company",companySchema);