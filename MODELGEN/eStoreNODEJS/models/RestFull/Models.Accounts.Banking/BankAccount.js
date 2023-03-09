const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let bankAccountSchema = new Schema({id:{type:Number,required:false},bankId:{type:Number,required:false},accountNumber:{type:String,required:false},branch:{type:String,required:false},iFSCode:{type:String,required:false},accountType:{type:String,enum: Object.values(accountType),required:false},active:{type:Boolean,required:false}},{collection:"bankAccount"});
module.exports = mongoose.model("bankAccount",bankAccountSchema);