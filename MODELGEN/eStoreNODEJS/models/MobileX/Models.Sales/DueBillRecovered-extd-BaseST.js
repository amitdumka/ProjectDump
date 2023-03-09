const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let DueBillRecovered-extd-BaseSTSchema = new Schema({InvoiceNumber:{type:String,required:false},OnDate:{type:String,enum: Object.values(DateTime),required:false},Amount:{type:Number,required:false},PayMode:{type:String,enum: Object.values(PayMode),required:false},PaymentDetails:{type:String,required:false},ParitialRecovery:{type:Boolean,required:false}},{collection:"DueBillRecovered-extd-BaseST"});
module.exports = mongoose.model("DueBillRecovered-extd-BaseST",DueBillRecovered-extd-BaseSTSchema);