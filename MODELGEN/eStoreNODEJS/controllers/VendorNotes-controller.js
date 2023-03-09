let mongoose = require("mongoose");

// VendorNotes Model
let VendorNotesSchema = require("../models//MobileX/Models.Accounts.Vochers");

// CREATE VendorNotes
exports.create = (req, res, next) => {
  VendorNotesSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
};

// READ VendorNotess
exports.read = (req, res) => {
  VendorNotesSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Get Single VendorNotes
exports.readById = (req, res) => {
  VendorNotesSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Update VendorNotes
exports.update = (req, res, next) => {
  VendorNotesSchema.findByIdAndUpdate(
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
        console.log("VendorNotes updated successfully !");
      }
    }
  );
};

// Delete VendorNotes
exports.delete = (req, res, next) => {
  VendorNotesSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
