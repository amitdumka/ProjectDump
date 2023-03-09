let mongoose = require("mongoose");

// CashVoucher Model
let CashVoucherSchema = require("../models//RestFull/Models.Accounts.Vochers");

// CREATE CashVoucher
exports.create = (req, res, next) => {
  CashVoucherSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
};

// READ CashVouchers
exports.read = (req, res) => {
  CashVoucherSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Get Single CashVoucher
exports.readById = (req, res) => {
  CashVoucherSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Update CashVoucher
exports.update = (req, res, next) => {
  CashVoucherSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("CashVoucher updated successfully !");
      }
    }
  );
};

// Delete CashVoucher
exports.delete = (req, res, next) => {
  CashVoucherSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
