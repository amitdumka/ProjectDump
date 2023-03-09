const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let productStockSchema = new Schema({barcode:{type:String,required:false},productName:{type:String,required:false},stock:{type:Number,required:false},mRP:{type:Number,required:false},taxRate:{type:Number,required:false}},{collection:"productStock"});
module.exports = mongoose.model("productStock",productStockSchema);
//Add base class data 
//productStock	 extends BaseST