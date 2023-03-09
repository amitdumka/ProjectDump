let mongoose = require("mongoose");

// Rent Model
let RentSchema = require("../models//RestFull/Models.Accounts.Renting");

// CREATE Rent
exports.create = (req, res, next) => {
  RentSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
};

// READ Rents
exports.read = (req, res) => {
  RentSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Get Single Rent
exports.readById = (req, res) => {
  RentSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Update Rent
exports.update = (req, res, next) => {
  RentSchema.findByIdAndUpdate(
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
        console.log("Rent updated successfully !");
      }
    }
  );
};

// Delete Rent
exports.delete = (req, res, next) => {
  RentSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
