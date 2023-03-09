let mongoose = require("mongoose");

// EletricityBillPayment Model
let EletricityBillPaymentSchema = require("../models//RestFull/Models.Accounts.Facilities");

// CREATE EletricityBillPayment
exports.create = (req, res, next) => {
  EletricityBillPaymentSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
};

// READ EletricityBillPayments
exports.read = (req, res) => {
  EletricityBillPaymentSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Get Single EletricityBillPayment
exports.readById = (req, res) => {
  EletricityBillPaymentSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Update EletricityBillPayment
exports.update = (req, res, next) => {
  EletricityBillPaymentSchema.findByIdAndUpdate(
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
        console.log("EletricityBillPayment updated successfully !");
      }
    }
  );
};

// Delete EletricityBillPayment
exports.delete = (req, res, next) => {
  EletricityBillPaymentSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
