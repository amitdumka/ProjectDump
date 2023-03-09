let mongoose = require("mongoose");

// BankAccount Model
let BankAccountSchema = require("../models//RestFull/Models.Accounts.Banking");

// CREATE BankAccount
exports.create = (req, res, next) => {
  BankAccountSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
};

// READ BankAccounts
exports.read = (req, res) => {
  BankAccountSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Get Single BankAccount
exports.readById = (req, res) => {
  BankAccountSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Update BankAccount
exports.update = (req, res, next) => {
  BankAccountSchema.findByIdAndUpdate(
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
        console.log("BankAccount updated successfully !");
      }
    }
  );
};

// Delete BankAccount
exports.delete = (req, res, next) => {
  BankAccountSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
