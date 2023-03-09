let mongoose = require("mongoose");

// EletricityBill Model
let EletricityBillSchema = require("../models//RestFull/Models.Accounts.Facilities");

// CREATE EletricityBill
exports.create = (req, res, next) => {
  EletricityBillSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
};

// READ EletricityBills
exports.read = (req, res) => {
  EletricityBillSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Get Single EletricityBill
exports.readById = (req, res) => {
  EletricityBillSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Update EletricityBill
exports.update = (req, res, next) => {
  EletricityBillSchema.findByIdAndUpdate(
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
        console.log("EletricityBill updated successfully !");
      }
    }
  );
};

// Delete EletricityBill
exports.delete = (req, res, next) => {
  EletricityBillSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
