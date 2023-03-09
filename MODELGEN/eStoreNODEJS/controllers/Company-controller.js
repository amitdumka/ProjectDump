let mongoose = require("mongoose");

// Company Model
let CompanySchema = require("../models//RestFull/Models.Stores");

// CREATE Company
exports.create = (req, res, next) => {
  CompanySchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
};

// READ Companys
exports.read = (req, res) => {
  CompanySchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Get Single Company
exports.readById = (req, res) => {
  CompanySchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Update Company
exports.update = (req, res, next) => {
  CompanySchema.findByIdAndUpdate(
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
        console.log("Company updated successfully !");
      }
    }
  );
};

// Delete Company
exports.delete = (req, res, next) => {
  CompanySchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
