const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let invoicePrintSchema = new Schema({invoiceNumber:{type:String,required:false},lastPrintedOn:{type:DateTime,required:false},orginalPrinted:{type:Boolean,required:false},reprinted:{type:Number,required:false}},{collection:"invoicePrint"});
module.exports = mongoose.model("invoicePrint",invoicePrintSchema);