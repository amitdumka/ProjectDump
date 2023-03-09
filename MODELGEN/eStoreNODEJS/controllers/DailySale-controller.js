let mongoose = require("mongoose");

// DailySale Model
let DailySaleSchema = require("../models//MobileX/Models.Sales");

// CREATE DailySale
exports.create = (req, res, next) => {
  DailySaleSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
};

// READ DailySales
exports.read = (req, res) => {
  DailySaleSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Get Single DailySale
exports.readById = (req, res) => {
  DailySaleSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Update DailySale
exports.update = (req, res, next) => {
  DailySaleSchema.findByIdAndUpdate(
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
        console.log("DailySale updated successfully !");
      }
    }
  );
};

// Delete DailySale
exports.delete = (req, res, next) => {
  DailySaleSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
