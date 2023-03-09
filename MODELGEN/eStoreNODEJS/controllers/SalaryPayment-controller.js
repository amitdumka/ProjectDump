let mongoose = require("mongoose");

// SalaryPayment Model
let SalaryPaymentSchema = require("../models//RestFull/Models.Payrolls");

// CREATE SalaryPayment
exports.create = (req, res, next) => {
  SalaryPaymentSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
};

// READ SalaryPayments
exports.read = (req, res) => {
  SalaryPaymentSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Get Single SalaryPayment
exports.readById = (req, res) => {
  SalaryPaymentSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Update SalaryPayment
exports.update = (req, res, next) => {
  SalaryPaymentSchema.findByIdAndUpdate(
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
        console.log("SalaryPayment updated successfully !");
      }
    }
  );
};

// Delete SalaryPayment
exports.delete = (req, res, next) => {
  SalaryPaymentSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
