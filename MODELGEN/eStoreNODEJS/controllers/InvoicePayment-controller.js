let mongoose = require("mongoose");

// InvoicePayment Model
let InvoicePaymentSchema = require("../models//RestFull/Models.Invoices");

// CREATE InvoicePayment
exports.create = (req, res, next) => {
  InvoicePaymentSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
};

// READ InvoicePayments
exports.read = (req, res) => {
  InvoicePaymentSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Get Single InvoicePayment
exports.readById = (req, res) => {
  InvoicePaymentSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Update InvoicePayment
exports.update = (req, res, next) => {
  InvoicePaymentSchema.findByIdAndUpdate(
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
        console.log("InvoicePayment updated successfully !");
      }
    }
  );
};

// Delete InvoicePayment
exports.delete = (req, res, next) => {
  InvoicePaymentSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
