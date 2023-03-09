const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let bankSchema = new Schema({id:{type:Number,required:false},bankName:{type:String,required:false}},{collection:"bank"});
module.exports = mongoose.model("bank",bankSchema);