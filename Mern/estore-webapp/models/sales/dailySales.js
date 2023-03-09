const mongoose = require('mongoose')
const Schema = mongoose.Schema
require('../enums')

let dailySaleSchema = new Schema(
  {
    dailySaleId: { type: Number, require: false,default:0},
    salesmanId: { type: Number , require: false},
    SaleDate: { type: String,require: true},
    invNo: { type: String , require:true},
    payMode: { type: Number, enum: Object.values(AttUnit),default: AttUnit.Present},
    amount: { type: Number ,require:false},
    cashAmount: { type: Number, default: false },
    isDue: { type: Boolean, default: false },
    isManualBill: { type: Boolean, default: false },
    isTailoringBill: { type: Boolean, default: false },
    isSaleReturn: { type: Boolean, default: false },
    userId: { type: String, default: false },
    isReadOnly: { type: Boolean, default: false },
    isMatchedWithVOy: { type: Boolean, default: false },
    edcTranscationId: { type: Number, default: false },
    entryStatus: { type: Numner, default: false },
    taxAmount: { type: Number, default: false },
    storeCode:{ type: String, default: false},
    createdAt:{ type: Date,default:new Date()}
  },
  {
    collection: 'dailySales',
  },
)

module.exports = mongoose.model('dailySale', dailySaleSchema)

