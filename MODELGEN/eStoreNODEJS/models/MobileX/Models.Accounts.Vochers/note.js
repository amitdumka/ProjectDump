const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let noteSchema = new Schema({noteNumber:{type:String,required:false},onDate:{type:DateTime,required:false},noteTyes:{type:String,enum: Object.values(noteTyes),required:false},partyName:{type:String,required:false},partyId:{type:Number,required:false},amount:{type:Number,required:false},withGST:{type:Boolean,required:false},taxAmount:{type:Number,required:false},reason:{type:String,required:false},remarks:{type:String,required:false}},{collection:"note"});
module.exports = mongoose.model("note",noteSchema);
//Add base class data 
//note	 extends BaseST