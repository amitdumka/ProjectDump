let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// employee Model
let employeeSchema = require('../../models/payrolls/employee');

// CREATE employee
router.route('/').post((req, res, next) => {
  employeeSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ employees
router.route('/').get((req, res) => {
  employeeSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single employee
router.route('/:id').get((req, res) => {
  employeeSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update employee
router.route('/:id').put((req, res, next) => {
  employeeSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('employee updated successfully !')
    }
  })
})

// Delete employee
router.route('/:id').delete((req, res, next) => {
  employeeSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;