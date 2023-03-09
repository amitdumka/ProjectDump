let mongoose = require("mongoose");

// EletricityConnection Model
let EletricityConnectionSchema = require("../models//RestFull/Models.Accounts.Facilities");

// CREATE EletricityConnection
exports.create = (req, res, next) => {
  EletricityConnectionSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
};

// READ EletricityConnections
exports.read = (req, res) => {
  EletricityConnectionSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Get Single EletricityConnection
exports.readById = (req, res) => {
  EletricityConnectionSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Update EletricityConnection
exports.update = (req, res, next) => {
  EletricityConnectionSchema.findByIdAndUpdate(
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
        console.log("EletricityConnection updated successfully !");
      }
    }
  );
};

// Delete EletricityConnection
exports.delete = (req, res, next) => {
  EletricityConnectionSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
