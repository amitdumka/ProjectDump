const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let salaryPaymentSchema = new Schema({employeeId:{type:Number,required:false},employee:{type:String,enum: Object.values(employee),required:false},salaryMonth:{type:String,required:false},salaryComponet:{type:String,enum: Object.values(salaryComponet),required:false},onDate:{type:DateTime,required:false},amount:{type:Number,required:false},payMode:{type:String,enum: Object.values(payMode),required:false},details:{type:String,required:false}},{collection:"salaryPayment"});
module.exports = mongoose.model("salaryPayment",salaryPaymentSchema);
//Add base class data 
//salaryPayment	 extends BaseST