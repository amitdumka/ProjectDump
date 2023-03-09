const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Stock-extd-BaseSTSchema = new Schema({Barcode:{type:String,required:false},Cost:{type:Number,required:false},PurchaseQty:{type:Number,required:false},SoldQty:{type:Number,required:false},HoldQty:{type:Number,required:false}},{collection:"Stock-extd-BaseST"});
module.exports = mongoose.model("Stock-extd-BaseST",Stock-extd-BaseSTSchema);