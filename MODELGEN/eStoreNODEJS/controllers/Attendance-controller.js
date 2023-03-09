let mongoose = require("mongoose");

// Attendance Model
let AttendanceSchema = require("../models//RestFull/Models.Payrolls");

// CREATE Attendance
exports.create = (req, res, next) => {
  AttendanceSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
};

// READ Attendances
exports.read = (req, res) => {
  AttendanceSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Get Single Attendance
exports.readById = (req, res) => {
  AttendanceSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Update Attendance
exports.update = (req, res, next) => {
  AttendanceSchema.findByIdAndUpdate(
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
        console.log("Attendance updated successfully !");
      }
    }
  );
};

// Delete Attendance
exports.delete = (req, res, next) => {
  AttendanceSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
