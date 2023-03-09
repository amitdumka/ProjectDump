let mongoose = require("mongoose");

// InvoiceItem Model
let InvoiceItemSchema = require("../models//RestFull/Models.Invoices");

// CREATE InvoiceItem
exports.create = (req, res, next) => {
  InvoiceItemSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
};

// READ InvoiceItems
exports.read = (req, res) => {
  InvoiceItemSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Get Single InvoiceItem
exports.readById = (req, res) => {
  InvoiceItemSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Update InvoiceItem
exports.update = (req, res, next) => {
  InvoiceItemSchema.findByIdAndUpdate(
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
        console.log("InvoiceItem updated successfully !");
      }
    }
  );
};

// Delete InvoiceItem
exports.delete = (req, res, next) => {
  InvoiceItemSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
