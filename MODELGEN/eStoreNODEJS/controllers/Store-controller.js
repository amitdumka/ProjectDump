let mongoose = require("mongoose");

// Store Model
let StoreSchema = require("../models//RestFull/Models.Stores");

// CREATE Store
exports.create = (req, res, next) => {
  StoreSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
};

// READ Stores
exports.read = (req, res) => {
  StoreSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Get Single Store
exports.readById = (req, res) => {
  StoreSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Update Store
exports.update = (req, res, next) => {
  StoreSchema.findByIdAndUpdate(
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
        console.log("Store updated successfully !");
      }
    }
  );
};

// Delete Store
exports.delete = (req, res, next) => {
  StoreSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
