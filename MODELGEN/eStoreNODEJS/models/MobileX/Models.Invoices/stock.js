const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let stockSchema = new Schema({barcode:{type:String,required:false},cost:{type:Number,required:false},purchaseQty:{type:Number,required:false},soldQty:{type:Number,required:false},holdQty:{type:Number,required:false}},{collection:"stock"});
module.exports = mongoose.model("stock",stockSchema);
//Add base class data 
//stock	 extends BaseST