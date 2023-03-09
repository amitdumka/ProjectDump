const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let baseGTSchema = new Schema({id:{type:Number,required:false},userId:{type:String,required:false},isReadOnly:{type:Boolean,required:false}},{collection:"baseGT"});
module.exports = mongoose.model("baseGT",baseGTSchema);