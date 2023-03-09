let mongoose = require("mongoose");

// User Model
let UserSchema = require("../models//RestFull/Models.Users");

// CREATE User
exports.create = (req, res, next) => {
  UserSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
};

// READ Users
exports.read = (req, res) => {
  UserSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Get Single User
exports.readById = (req, res) => {
  UserSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Update User
exports.update = (req, res, next) => {
  UserSchema.findByIdAndUpdate(
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
        console.log("User updated successfully !");
      }
    }
  );
};

// Delete User
exports.delete = (req, res, next) => {
  UserSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
