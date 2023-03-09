const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let eletricityBillSchema = new Schema({onDate:{type:DateTime,required:false},billNumber:{type:String,required:false},amount:{type:Number,required:false},dueDate:{type:DateTime,required:false},connectionId:{type:Number,required:false},paid:{type:Boolean,required:false}},{collection:"eletricityBill"});
module.exports = mongoose.model("eletricityBill",eletricityBillSchema);
//Add base class data 
//eletricityBill	 extends BaseST