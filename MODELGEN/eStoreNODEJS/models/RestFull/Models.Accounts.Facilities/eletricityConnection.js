const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let eletricityConnectionSchema = new Schema({onDate:{type:DateTime,required:false},disconnectionDate:{type:DateTime,required:false},active:{type:Boolean,required:false},load:{type:Number,required:false},connectionType:{type:String,enum: Object.values(connectionType),required:false},name:{type:String,required:false},address:{type:String,required:false},connectionNumber:{type:String,required:false},otherConnectionDetails:{type:String,required:false}},{collection:"eletricityConnection"});
module.exports = mongoose.model("eletricityConnection",eletricityConnectionSchema);
//Add base class data 
//eletricityConnection	 extends BaseST