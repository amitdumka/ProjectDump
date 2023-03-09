const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let salaryPaymentMVSchema = new Schema({employeeId:{type:Number,required:false},salaryMonth:{type:String,required:false},salaryComponet:{type:String,enum: Object.values(salaryComponet),required:false},paymentDate:{type:DateTime,required:false},amount:{type:Number,required:false},payMode:{type:String,enum: Object.values(payMode),required:false},details:{type:String,required:false}},{collection:"salaryPaymentMV"});
module.exports = mongoose.model("salaryPaymentMV",salaryPaymentMVSchema);