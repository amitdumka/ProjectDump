const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let ProductStock-extd-BaseSTSchema = new Schema({Barcode:{type:String,required:false},ProductName:{type:String,required:false},Stock:{type:Number,required:false},MRP:{type:Number,required:false},TaxRate:{type:Number,required:false}},{collection:"ProductStock-extd-BaseST"});
module.exports = mongoose.model("ProductStock-extd-BaseST",ProductStock-extd-BaseSTSchema);