const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let invoiceSchema = new Schema({invoiceNumber:{type:String,required:false},invoiceType:{type:String,enum: Object.values(invoiceType),required:false},onDate:{type:DateTime,required:false},customerId:{type:Number,required:false},mobileNo:{type:String,required:false},totalAmount:{type:Number,required:false},totalDiscount:{type:Number,required:false},totalTaxAmount:{type:Number,required:false},totalQuantity:{type:Number,required:false},},{collection:"invoice"});
module.exports = mongoose.model("invoice",invoiceSchema);
//Add base class data 
//invoice	 extends BaseST