let mongoose = require("mongoose");

// Salesman Model
let SalesmanSchema = require("../models//RestFull/Models.Stores");

// CREATE Salesman
exports.create = (req, res, next) => {
  SalesmanSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
};

// READ Salesmans
exports.read = (req, res) => {
  SalesmanSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Get Single Salesman
exports.readById = (req, res) => {
  SalesmanSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Update Salesman
exports.update = (req, res, next) => {
  SalesmanSchema.findByIdAndUpdate(
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
        console.log("Salesman updated successfully !");
      }
    }
  );
};

// Delete Salesman
exports.delete = (req, res, next) => {
  SalesmanSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
