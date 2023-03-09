let mongoose = require("mongoose");

// DueBillRecovered Model
let DueBillRecoveredSchema = require("../models//MobileX/Models.Sales");

// CREATE DueBillRecovered
exports.create = (req, res, next) => {
  DueBillRecoveredSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
};

// READ DueBillRecovereds
exports.read = (req, res) => {
  DueBillRecoveredSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Get Single DueBillRecovered
exports.readById = (req, res) => {
  DueBillRecoveredSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Update DueBillRecovered
exports.update = (req, res, next) => {
  DueBillRecoveredSchema.findByIdAndUpdate(
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
        console.log("DueBillRecovered updated successfully !");
      }
    }
  );
};

// Delete DueBillRecovered
exports.delete = (req, res, next) => {
  DueBillRecoveredSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
