const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let rentedPropertySchema = new Schema({locationName:{type:String,required:false},address:{type:String,required:false},ownerName:{type:String,required:false},contactNumber:{type:String,required:false},onDate:{type:DateTime,required:false},vacateDate:{type:DateTime,required:false},occupied:{type:Boolean,required:false},advanceAmount:{type:Number,required:false},rentType:{type:String,enum: Object.values(rentType),required:false},remarks:{type:String,required:false}},{collection:"rentedProperty"});
module.exports = mongoose.model("rentedProperty",rentedPropertySchema);
//Add base class data 
//rentedProperty	 extends BaseGT