const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let employeeSchema = new Schema({firstName:{type:String,required:false},lastName:{type:String,required:false},mobileNo:{type:String,required:false},joiningDate:{type:DateTime,required:false},leavingDate:{type:DateTime,required:false},isWorking:{type:Boolean,required:false},category:{type:String,enum: Object.values(empType),required:false},eMail:{type:String,required:false},dateOfBirth:{type:DateTime,required:false},adharNumber:{type:String,required:false},panNo:{type:String,required:false},otherIdDetails:{type:String,required:false},address:{type:String,required:false},city:{type:String,required:false},state:{type:String,required:false},fatherName:{type:String,required:false},highestQualification:{type:String,required:false}},{collection:"employee"});
module.exports = mongoose.model("employee",employeeSchema);
//Add base class data 
//employee	 extends BaseST