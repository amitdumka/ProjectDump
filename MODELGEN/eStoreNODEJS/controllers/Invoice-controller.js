let mongoose = require("mongoose");

// Invoice Model
let InvoiceSchema = require("../models//RestFull/Models.Invoices");

// CREATE Invoice
exports.create = (req, res, next) => {
  InvoiceSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
};

// READ Invoices
exports.read = (req, res) => {
  InvoiceSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Get Single Invoice
exports.readById = (req, res) => {
  InvoiceSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Update Invoice
exports.update = (req, res, next) => {
  InvoiceSchema.findByIdAndUpdate(
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
        console.log("Invoice updated successfully !");
      }
    }
  );
};

// Delete Invoice
exports.delete = (req, res, next) => {
  InvoiceSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
