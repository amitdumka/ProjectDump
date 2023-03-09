const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let dailySaleSchema = new Schema({invoiceNumber:{type:String,required:false},onDate:{type:DateTime,required:false},amount:{type:Number,required:false},cashAmount:{type:Number,required:false},saleReturn:{type:Boolean,required:false},manualInvoice:{type:Boolean,required:false},tailoringBill:{type:Boolean,required:false},due:{type:Boolean,required:false},salesmanId:{type:Number,required:false},paymentMode:{type:String,enum: Object.values(payMode),required:false}},{collection:"dailySale"});
module.exports = mongoose.model("dailySale",dailySaleSchema);
//Add base class data 
//dailySale	 extends BaseST