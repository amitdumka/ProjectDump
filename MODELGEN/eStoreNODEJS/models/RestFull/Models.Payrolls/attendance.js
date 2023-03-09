const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let attendanceSchema = new Schema({employeeId:{type:Number,required:false},attDate:{type:DateTime,required:false},entryTime:{type:String,required:false},status:{type:String,enum: Object.values(attUnit),required:false},remarks:{type:String,required:false},isTailoring:{type:Boolean,required:false}},{collection:"attendance"});
module.exports = mongoose.model("attendance",attendanceSchema);
//Add base class data 
//attendance	 extends BaseST