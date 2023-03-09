const mongoose = require('mongoose')
const Schema = mongoose.Schema
require('../enums')

let banksSchema = new Schema(
  {
    banksId: { type: Number, require: false,default:0},
    bankName: { type: String ,require:true},
    createdAt:{ type: Date,default:new Date()}
  },
  {
    collection: 'bankss',
  },
)

module.exports = mongoose.model('banks', banksSchema)
