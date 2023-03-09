const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let baseLocalSchema = new Schema({localId:{type:Number,required:false},isSync:{type:Boolean,required:false}},{collection:"baseLocal"});
module.exports = mongoose.model("baseLocal",baseLocalSchema);