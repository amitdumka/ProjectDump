const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let invoiceItemSchema = new Schema({invoiceNumber:{type:String,required:false},barcode:{type:String,required:false},quantity:{type:Number,required:false},discountAmount:{type:Number,required:false},basicPrice:{type:Number,required:false},taxAmount:{type:Number,required:false}},{collection:"invoiceItem"});
module.exports = mongoose.model("invoiceItem",invoiceItemSchema);