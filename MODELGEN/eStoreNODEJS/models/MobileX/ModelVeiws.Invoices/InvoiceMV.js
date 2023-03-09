const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let invoiceMVSchema = new Schema({invoiceNumber:{type:String,required:false},onDate:{type:DateTime,required:false},customerName:{type:String,required:false},mobileNo:{type:String,required:false},totalAmount:{type:Number,required:false},totalDiscount:{type:Number,required:false},totalTaxAmount:{type:Number,required:false},totalQuantity:{type:Number,required:false}},{collection:"invoiceMV"});
module.exports = mongoose.model("invoiceMV",invoiceMVSchema);