const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let userSchema = new Schema({userId:{type:Number,required:false},userName:{type:String,required:false},password:{type:String,required:false},isActive:{type:Boolean,required:false},isEmployee:{type:Boolean,required:false},fullName:{type:String,required:false},storeId:{type:Number,required:false},employeeId:{type:String,enum: Object.values(int?),required:false},userType:{type:String,enum: Object.values(userType),required:false}},{collection:"user"});
module.exports = mongoose.model("user",userSchema);