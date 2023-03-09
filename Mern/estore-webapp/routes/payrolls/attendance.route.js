let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// attendance Model
let attendanceSchema = require('../../models/payrolls/attendance');

// CREATE attendance
router.route('/create-attendance').post((req, res, next) => {
  attendanceSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ attendances
router.route('/').get((req, res) => {
  attendanceSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single attendance
router.route('/edit-attendance/:id').get((req, res) => {
  attendanceSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update attendance
router.route('/update-attendance/:id').put((req, res, next) => {
  attendanceSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('attendance updated successfully !')
    }
  })
})

// Delete attendance
router.route('/delete-attendance/:id').delete((req, res, next) => {
  attendanceSchema.findByIdAndRemove(req.params.id, (error, data) => {
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