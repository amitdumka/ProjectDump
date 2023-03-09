let mongoose = require('mongoose');

// expense Model
let expenseSchema = require('../../models/accouting/expense');

// CREATE expense
export const create=(req, res, next) => {
  expenseSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
};

// READ expenses
export const read=(req, res) => {
  expenseSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
}

// Get Single expense
export const readById=(req, res) => {
  expenseSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
}


// Update expense
export const update=(req, res, next) => {
  expenseSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('expense updated successfully !')
    }
  })
}

// Delete expense
export const deleteById=(req, res, next) => {
  expenseSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
}

module.exports = router;