let mongoose = require("mongoose");

// Bank Model
let BankSchema = require("../models//RestFull/Models.Accounts.Banking");

// CREATE Bank
exports.create = (req, res, next) => {
  BankSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
};

// READ Banks
exports.read = (req, res) => {
  BankSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Get Single Bank
exports.readById = (req, res) => {
  BankSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Update Bank
exports.update = (req, res, next) => {
  BankSchema.findByIdAndUpdate(
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
        console.log("Bank updated successfully !");
      }
    }
  );
};

// Delete Bank
exports.delete = (req, res, next) => {
  BankSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
