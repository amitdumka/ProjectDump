const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let vendorNotesSchema = new Schema({vendorId:{type:Number,required:false}},{collection:"vendorNotes"});
module.exports = mongoose.model("vendorNotes",vendorNotesSchema);
//Add base class data 
//vendorNotes	 extends Note