const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let EletricityBill-extd-BaseSTSchema = new Schema({OnDate:{type:String,enum: Object.values(DateTime),required:false},BillNumber:{type:String,required:false},Amount:{type:Number,required:false},DueDate:{type:String,enum: Object.values(DateTime),required:false},ConnectionId:{type:Number,required:false},Paid:{type:Boolean,required:false}},{collection:"EletricityBill-extd-BaseST"});
module.exports = mongoose.model("EletricityBill-extd-BaseST",EletricityBill-extd-BaseSTSchema);