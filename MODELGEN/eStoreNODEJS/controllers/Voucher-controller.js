let mongoose = require("mongoose");

// Voucher Model
let VoucherSchema = require("../models//RestFull/Models.Accounts.Vochers");

// CREATE Voucher
exports.create = (req, res, next) => {
  VoucherSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
};

// READ Vouchers
exports.read = (req, res) => {
  VoucherSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Get Single Voucher
exports.readById = (req, res) => {
  VoucherSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Update Voucher
exports.update = (req, res, next) => {
  VoucherSchema.findByIdAndUpdate(
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
        console.log("Voucher updated successfully !");
      }
    }
  );
};

// Delete Voucher
exports.delete = (req, res, next) => {
  VoucherSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
