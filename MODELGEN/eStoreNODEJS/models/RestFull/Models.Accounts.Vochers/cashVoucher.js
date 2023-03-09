const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let cashVoucherSchema = new Schema({voucherNumber:{type:String,required:false},onDate:{type:DateTime,required:false},voucherType:{type:String,enum: Object.values(voucherTypes),required:false},partyName:{type:String,required:false},amount:{type:Number,required:false},remarks:{type:String,required:false},employeeId:{type:Number,required:false},paymentMode:{type:String,enum: Object.values(paymentMode),required:false},transcationDetails:{type:String,required:false},bankAccountId:{type:Number,required:false},partyId:{type:Number,required:false},slipNo:{type:String,required:false}},{collection:"cashVoucher"});
module.exports = mongoose.model("cashVoucher",cashVoucherSchema);
//Add base class data 
//cashVoucher	 extends BaseST