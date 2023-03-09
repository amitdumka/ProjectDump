let mongoose = require("mongoose");

// Employee Model
let EmployeeSchema = require("../models//RestFull/Models.Payrolls");

// CREATE Employee
exports.create = (req, res, next) => {
  EmployeeSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
};

// READ Employees
exports.read = (req, res) => {
  EmployeeSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Get Single Employee
exports.readById = (req, res) => {
  EmployeeSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Update Employee
exports.update = (req, res, next) => {
  EmployeeSchema.findByIdAndUpdate(
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
        console.log("Employee updated successfully !");
      }
    }
  );
};

// Delete Employee
exports.delete = (req, res, next) => {
  EmployeeSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
