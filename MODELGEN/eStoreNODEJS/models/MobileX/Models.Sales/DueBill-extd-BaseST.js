const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let DueBill-extd-BaseSTSchema = new Schema({InvoiceNumber:{type:String,required:false},OnDate:{type:String,enum: Object.values(DateTime),required:false},Amount:{type:Number,required:false}},{collection:"DueBill-extd-BaseST"});
module.exports = mongoose.model("DueBill-extd-BaseST",DueBill-extd-BaseSTSchema);