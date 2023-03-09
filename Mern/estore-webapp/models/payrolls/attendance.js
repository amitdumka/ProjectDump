const mongoose = require('mongoose')
const Schema = mongoose.Schema
require('../enums')

let attendanceSchema = new Schema(
  {
    employeeCode: { type: String,require:false },
    attendanceId: { type: Number, require: false,default:0},
    employeeId: { type: Number , require: false},
    attDate: { type: String,require: true},
    entryTime: { type: String },
    status: { type: Number, enum: Object.values(AttUnit),default: AttUnit.Present},
    remarks: { type: String ,require:false},
    isTailoring: { type: Boolean, default: false },
    storeCode: { type: String },
    createdAt:{ type: Date,default:new Date()}
  },
  {
    collection: 'attendances',
  },
)

module.exports = mongoose.model('attendance', attendanceSchema)
