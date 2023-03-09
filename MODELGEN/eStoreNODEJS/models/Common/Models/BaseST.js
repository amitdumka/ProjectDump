const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let baseSTSchema = new Schema({id:{type:Number,required:false},storeId:{type:Number,required:false},userId:{type:String,required:false},isReadOnly:{type:Boolean,required:false}},{collection:"baseST"});
module.exports = mongoose.model("baseST",baseSTSchema);