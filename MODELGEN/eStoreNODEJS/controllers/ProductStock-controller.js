let mongoose = require("mongoose");

// ProductStock Model
let ProductStockSchema = require("../models//MobileX/Models.Invoices");

// CREATE ProductStock
exports.create = (req, res, next) => {
  ProductStockSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
};

// READ ProductStocks
exports.read = (req, res) => {
  ProductStockSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Get Single ProductStock
exports.readById = (req, res) => {
  ProductStockSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Update ProductStock
exports.update = (req, res, next) => {
  ProductStockSchema.findByIdAndUpdate(
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
        console.log("ProductStock updated successfully !");
      }
    }
  );
};

// Delete ProductStock
exports.delete = (req, res, next) => {
  ProductStockSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
