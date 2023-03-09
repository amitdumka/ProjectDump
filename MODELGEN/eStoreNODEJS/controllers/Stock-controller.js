let mongoose = require("mongoose");

// Stock Model
let StockSchema = require("../models//MobileX/Models.Invoices");

// CREATE Stock
exports.create = (req, res, next) => {
  StockSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
};

// READ Stocks
exports.read = (req, res) => {
  StockSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Get Single Stock
exports.readById = (req, res) => {
  StockSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Update Stock
exports.update = (req, res, next) => {
  StockSchema.findByIdAndUpdate(
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
        console.log("Stock updated successfully !");
      }
    }
  );
};

// Delete Stock
exports.delete = (req, res, next) => {
  StockSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
