let mongoose = require("mongoose");

// RentedProperty Model
let RentedPropertySchema = require("../models//RestFull/Models.Accounts.Renting");

// CREATE RentedProperty
exports.create = (req, res, next) => {
  RentedPropertySchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
};

// READ RentedPropertys
exports.read = (req, res) => {
  RentedPropertySchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Get Single RentedProperty
exports.readById = (req, res) => {
  RentedPropertySchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Update RentedProperty
exports.update = (req, res, next) => {
  RentedPropertySchema.findByIdAndUpdate(
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
        console.log("RentedProperty updated successfully !");
      }
    }
  );
};

// Delete RentedProperty
exports.delete = (req, res, next) => {
  RentedPropertySchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
