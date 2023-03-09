const mongoose = require('mongoose')
const Schema = mongoose.Schema
require('../enums')

let attendanceSchema = new Schema(
  {    
    BankAccountId: { type: Number, require: false,default:0},
    BankId: { type: Number , require: false},     
    Account: { type: String },
    AccountType: { type: Number, enum: Object.values(AccountType),default: AttAccountType.Current},
    BranchName: { type: String ,require:false},
    createdAt:{ type: Date,default:new Date()}
  },
  {
    collection: 'bankAccounts',
  },
)

module.exports = mongoose.model('attendance', attendanceSchema)
