const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let EletricityConnection-extd-BaseSTSchema = new Schema({OnDate:{type:String,enum: Object.values(DateTime),required:false},DisconnectionDate:{type:String,enum: Object.values(DateTime?),required:false},Active:{type:Boolean,required:false},Load:{type:Number,required:false},ConnectionType:{type:String,enum: Object.values(ConnectionType),required:false},Name:{type:String,required:false},Address:{type:String,required:false},ConnectionNumber:{type:String,required:false},OtherConnectionDetails:{type:String,required:false}},{collection:"EletricityConnection-extd-BaseST"});
module.exports = mongoose.model("EletricityConnection-extd-BaseST",EletricityConnection-extd-BaseSTSchema);