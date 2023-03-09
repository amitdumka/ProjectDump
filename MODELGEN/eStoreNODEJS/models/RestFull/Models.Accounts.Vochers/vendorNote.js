const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let vendorNoteSchema = new Schema({vendorId:{type:Number,required:false}},{collection:"vendorNote"});
module.exports = mongoose.model("vendorNote",vendorNoteSchema);
//Add base class data 
//vendorNote	 extends Note