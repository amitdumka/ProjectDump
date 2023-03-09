let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
//Import Controller
var controller = require("../models/RestFull/Models.Accounts.Facilities");

/// ROUTES ///

// GET catalog home page.
//router.get('/', controller.index);

// GET request for creating a EletricityBillPayment. NOTE This must come before routes that display EletricityBillPayment (uses id).
//router.get('/create', controller.EletricityBillPayment_create_get); Implement if Required

// POST request for creating EletricityBillPayment.
router.post("/", controller.create);

// GET request to delete EletricityBillPayment.
//router.get('/:id/delete', controller.EletricityBillPayment_delete_get);

// POST request to delete EletricityBillPayment.
router.post("/:id/delete", controller.delete);

// GET request to update EletricityBillPayment.
//router.get('/:id/update', controller.EletricityBillPayment_update_get);

// POST request to update EletricityBillPayment.
router.post("/:id/update", controller.update);

// GET request for one EletricityBillPayment.
router.get("/:id", controller.readById);

// GET request for list of all EletricityBillPayment items.
router.get("/", controller.read);

// add this line App.js
//var EletricityBillPayment=require("../models/RestFull/Models.Accounts.Facilities")
//app.use('/EletricityBillPayment', EletricityBillPayment); 