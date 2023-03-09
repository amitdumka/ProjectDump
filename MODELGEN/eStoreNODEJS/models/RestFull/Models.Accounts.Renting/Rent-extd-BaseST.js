const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Rent-extd-BaseSTSchema = new Schema({OnDate:{type:String,enum: Object.values(DateTime),required:false},RentedPropertyId:{type:Number,required:false},Period:{type:Number,required:false},Amount:{type:Number,required:false},Remarks:{type:String,required:false}},{collection:"Rent-extd-BaseST"});
module.exports = mongoose.model("Rent-extd-BaseST",Rent-extd-BaseSTSchema);