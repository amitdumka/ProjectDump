let mongoose = require("mongoose");

// VendorNote Model
let VendorNoteSchema = require("../models//RestFull/Models.Accounts.Vochers");

// CREATE VendorNote
exports.create = (req, res, next) => {
  VendorNoteSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
};

// READ VendorNotes
exports.read = (req, res) => {
  VendorNoteSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Get Single VendorNote
exports.readById = (req, res) => {
  VendorNoteSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Update VendorNote
exports.update = (req, res, next) => {
  VendorNoteSchema.findByIdAndUpdate(
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
        console.log("VendorNote updated successfully !");
      }
    }
  );
};

// Delete VendorNote
exports.delete = (req, res, next) => {
  VendorNoteSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
