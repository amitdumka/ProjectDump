const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let VendorNote-extd-NoteSchema = new Schema({VendorId:{type:Number,required:false}},{collection:"VendorNote-extd-Note"});
module.exports = mongoose.model("VendorNote-extd-Note",VendorNote-extd-NoteSchema);