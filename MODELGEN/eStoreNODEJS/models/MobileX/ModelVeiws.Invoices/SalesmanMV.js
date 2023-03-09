const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let salesmanMVSchema = new Schema({salesmanId:{type:String,required:false},salesmanName:{type:String,required:false}},{collection:"salesmanMV"});
module.exports = mongoose.model("salesmanMV",salesmanMVSchema);