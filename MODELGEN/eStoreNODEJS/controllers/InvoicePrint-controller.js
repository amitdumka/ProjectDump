let mongoose = require("mongoose");

// InvoicePrint Model
let InvoicePrintSchema = require("../models//RestFull/Models.Invoices");

// CREATE InvoicePrint
exports.create = (req, res, next) => {
  InvoicePrintSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
};

// READ InvoicePrints
exports.read = (req, res) => {
  InvoicePrintSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Get Single InvoicePrint
exports.readById = (req, res) => {
  InvoicePrintSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Update InvoicePrint
exports.update = (req, res, next) => {
  InvoicePrintSchema.findByIdAndUpdate(
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
        console.log("InvoicePrint updated successfully !");
      }
    }
  );
};

// Delete InvoicePrint
exports.delete = (req, res, next) => {
  InvoicePrintSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
