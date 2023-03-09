const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let salesmanSchema = new Schema({salesmanId:{type:Number,required:false},salesmanName:{type:String,required:false},employeeId:{type:String,enum: Object.values(int?),required:false},},{collection:"salesman"});
module.exports = mongoose.model("salesman",salesmanSchema);
//Add base class data 
//salesman	 extends BaseST