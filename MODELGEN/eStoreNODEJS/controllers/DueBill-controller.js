let mongoose = require("mongoose");

// DueBill Model
let DueBillSchema = require("../models//MobileX/Models.Sales");

// CREATE DueBill
exports.create = (req, res, next) => {
  DueBillSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
};

// READ DueBills
exports.read = (req, res) => {
  DueBillSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Get Single DueBill
exports.readById = (req, res) => {
  DueBillSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Update DueBill
exports.update = (req, res, next) => {
  DueBillSchema.findByIdAndUpdate(
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
        console.log("DueBill updated successfully !");
      }
    }
  );
};

// Delete DueBill
exports.delete = (req, res, next) => {
  DueBillSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
