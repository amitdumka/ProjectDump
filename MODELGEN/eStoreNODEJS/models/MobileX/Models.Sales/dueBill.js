const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let dueBillSchema = new Schema({invoiceNumber:{type:String,required:false},onDate:{type:DateTime,required:false},amount:{type:Number,required:false}},{collection:"dueBill"});
module.exports = mongoose.model("dueBill",dueBillSchema);
//Add base class data 
//dueBill	 extends BaseST