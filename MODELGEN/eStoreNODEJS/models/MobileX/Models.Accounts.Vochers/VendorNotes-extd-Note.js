const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let VendorNotes-extd-NoteSchema = new Schema({VendorId:{type:Number,required:false}},{collection:"VendorNotes-extd-Note"});
module.exports = mongoose.model("VendorNotes-extd-Note",VendorNotes-extd-NoteSchema);