const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let DailySale-extd-BaseSTSchema = new Schema({InvoiceNumber:{type:String,required:false},OnDate:{type:String,enum: Object.values(DateTime),required:false},Amount:{type:Number,required:false},CashAmount:{type:Number,required:false},SaleReturn:{type:Boolean,required:false},ManualInvoice:{type:Boolean,required:false},TailoringBill:{type:Boolean,required:false},Due:{type:Boolean,required:false},SalesmanId:{type:Number,required:false},PaymentMode:{type:String,enum: Object.values(PayMode),required:false}},{collection:"DailySale-extd-BaseST"});
module.exports = mongoose.model("DailySale-extd-BaseST",DailySale-extd-BaseSTSchema);