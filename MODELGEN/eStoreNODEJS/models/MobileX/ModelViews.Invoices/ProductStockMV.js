const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let productStockMVSchema = new Schema({barcode:{type:String,required:false},productName:{type:String,required:false},stock:{type:Number,required:false},mRP:{type:Number,required:false},taxRate:{type:Number,required:false}},{collection:"productStockMV"});
module.exports = mongoose.model("productStockMV",productStockMVSchema);