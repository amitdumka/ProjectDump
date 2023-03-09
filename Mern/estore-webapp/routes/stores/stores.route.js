let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// store Model
let storeSchema = require('../../models/store')
const Store = require('../../models/store')
// CREATE store
router.route('/create-store').post((req, res, next) => {
  storeSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

router.route('/demo').get((req, res) => {
  const str = new Store({
    storeCode: 'JHC0006',
    storeName: 'Aprajita Retails',
    openingDate: new Date(2016, 02, 17),
    status: true,
    address: 'Bhagalpur Road, Dumka',
    city: 'Dumka',
    state: 'Jharkhand',
    pinCode: '814101',
    phoneNo: '06434-224461',
    storeId: 1,
    storeManagerName: 'Alok Kumar',
    storeManagerPhoneNo: '0123456789',
    panNo: 'AJHPA7396P',
    gstNo: '20AJHPA7396P1ZV',
    noOfEmployees: 7,
    closingDate: null,
  })
  str
    .save()
    .then(() =>
      res.json({
        message: 'Created account successfully',
      }),
    )
    .catch((err) =>
      res.status(400).json({
        error: err,
        message: 'Error creating account',
      }),
    )
})

// READ stores
router.route('/').get((req, res) => {
  storeSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single store
router.route('/edit-store/:id').get((req, res) => {
  storeSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update store
router.route('/update-store/:id').put((req, res, next) => {
  storeSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
        console.log(error)
      } else {
        res.json(data)
        console.log('store updated successfully !')
      }
    },
  )
})

// Delete store
router.route('/delete-store/:id').delete((req, res, next) => {
  storeSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = router
