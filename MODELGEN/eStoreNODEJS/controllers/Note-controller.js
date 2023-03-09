let mongoose = require("mongoose");

// Note Model
let NoteSchema = require("../models//RestFull/Models.Accounts.Vochers");

// CREATE Note
exports.create = (req, res, next) => {
  NoteSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
};

// READ Notes
exports.read = (req, res) => {
  NoteSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Get Single Note
exports.readById = (req, res) => {
  NoteSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Update Note
exports.update = (req, res, next) => {
  NoteSchema.findByIdAndUpdate(
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
        console.log("Note updated successfully !");
      }
    }
  );
};

// Delete Note
exports.delete = (req, res, next) => {
  NoteSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
