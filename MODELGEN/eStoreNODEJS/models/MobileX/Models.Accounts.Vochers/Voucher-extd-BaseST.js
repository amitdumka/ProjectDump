const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Voucher-extd-BaseSTSchema = new Schema({VoucherNumber:{type:String,required:false},OnDate:{type:String,enum: Object.values(DateTime),required:false},VoucherType:{type:String,enum: Object.values(VoucherTypes),required:false},PartyName:{type:String,required:false},Amount:{type:Number,required:false},Remarks:{type:String,required:false},EmployeeId:{type:Number,required:false},PaymentMode:{type:String,enum: Object.values(PaymentMode),required:false},TranscationDetails:{type:String,required:false},BankAccountId:{type:Number,required:false},PartyId:{type:Number,required:false},SlipNo:{type:String,required:false}},{collection:"Voucher-extd-BaseST"});
module.exports = mongoose.model("Voucher-extd-BaseST",Voucher-extd-BaseSTSchema);