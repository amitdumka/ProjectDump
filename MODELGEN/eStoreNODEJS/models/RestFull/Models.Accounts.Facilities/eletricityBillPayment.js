const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let eletricityBillPaymentSchema = new Schema({onDate:{type:DateTime,required:false},billNumber:{type:String,required:false},recieptNumber:{type:String,required:false},amount:{type:Number,required:false},connectionId:{type:Number,required:false},mode:{type:String,enum: Object.values(paymentMode),required:false},remarks:{type:String,required:false}},{collection:"eletricityBillPayment"});
module.exports = mongoose.model("eletricityBillPayment",eletricityBillPaymentSchema);
//Add base class data 
//eletricityBillPayment	 extends BaseST