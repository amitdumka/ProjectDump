const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let rentSchema = new Schema({onDate:{type:DateTime,required:false},rentedPropertyId:{type:Number,required:false},period:{type:Number,required:false},amount:{type:Number,required:false},remarks:{type:String,required:false}},{collection:"rent"});
module.exports = mongoose.model("rent",rentSchema);
//Add base class data 
//rent	 extends BaseST