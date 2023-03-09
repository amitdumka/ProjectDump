let mongoose = require("mongoose");

// _MODEL_NAME Model
let _MODEL_NAMESchema = require("MODEL_ABSOLUTE_PATH");

// CREATE _MODEL_NAME
exports.create = (req, res, next) => {
  _MODEL_NAMESchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
};

// READ _MODEL_NAMEs
exports.read = (req, res) => {
  _MODEL_NAMESchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Get Single _MODEL_NAME
exports.readById = (req, res) => {
  _MODEL_NAMESchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Update _MODEL_NAME
exports.update = (req, res, next) => {
  _MODEL_NAMESchema.findByIdAndUpdate(
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
        console.log("_MODEL_NAME updated successfully !");
      }
    }
  );
};

// Delete _MODEL_NAME
exports.delete = (req, res, next) => {
  _MODEL_NAMESchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
