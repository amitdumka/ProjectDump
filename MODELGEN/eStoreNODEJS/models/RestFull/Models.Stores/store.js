const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let storeSchema = new Schema({storeCode:{type:String,required:false},storeName:{type:String,required:false},address:{type:String,required:false},city:{type:String,required:false},pinCode:{type:String,required:false},phoneNo:{type:String,required:false},storeManagerName:{type:String,required:false},storeManagerPhoneNo:{type:String,required:false},panNo:{type:String,required:false},gSTNO:{type:String,required:false},noOfEmployees:{type:Number,required:false},openingDate:{type:DateTime,required:false},closingDate:{type:DateTime,required:false},status:{type:Boolean,required:false},companyId:{type:String,enum: Object.values(int?),required:false},},{collection:"store"});
module.exports = mongoose.model("store",storeSchema);
//Add base class data 
//store	 extends BaseGT