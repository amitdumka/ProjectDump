let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
//Import Controller
var controller = require("../models/RestFull/Models.Payrolls");

/// ROUTES ///

// GET catalog home page.
//router.get('/', controller.index);

// GET request for creating a SalaryPayment. NOTE This must come before routes that display SalaryPayment (uses id).
//router.get('/create', controller.SalaryPayment_create_get); Implement if Required

// POST request for creating SalaryPayment.
router.post("/", controller.create);

// GET request to delete SalaryPayment.
//router.get('/:id/delete', controller.SalaryPayment_delete_get);

// POST request to delete SalaryPayment.
router.post("/:id/delete", controller.delete);

// GET request to update SalaryPayment.
//router.get('/:id/update', controller.SalaryPayment_update_get);

// POST request to update SalaryPayment.
router.post("/:id/update", controller.update);

// GET request for one SalaryPayment.
router.get("/:id", controller.readById);

// GET request for list of all SalaryPayment items.
router.get("/", controller.read);

// add this line App.js
//var SalaryPayment=require("../models/RestFull/Models.Payrolls")
//app.use('/SalaryPayment', SalaryPayment); 