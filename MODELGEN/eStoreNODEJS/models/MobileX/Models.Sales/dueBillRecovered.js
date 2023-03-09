const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let dueBillRecoveredSchema = new Schema({invoiceNumber:{type:String,required:false},onDate:{type:DateTime,required:false},amount:{type:Number,required:false},payMode:{type:String,enum: Object.values(payMode),required:false},paymentDetails:{type:String,required:false},paritialRecovery:{type:Boolean,required:false}},{collection:"dueBillRecovered"});
module.exports = mongoose.model("dueBillRecovered",dueBillRecoveredSchema);
//Add base class data 
//dueBillRecovered	 extends BaseST