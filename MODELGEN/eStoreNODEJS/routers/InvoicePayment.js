let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
//Import Controller
var controller = require("../models/RestFull/Models.Invoices");

/// ROUTES ///

// GET catalog home page.
//router.get('/', controller.index);

// GET request for creating a InvoicePayment. NOTE This must come before routes that display InvoicePayment (uses id).
//router.get('/create', controller.InvoicePayment_create_get); Implement if Required

// POST request for creating InvoicePayment.
router.post("/", controller.create);

// GET request to delete InvoicePayment.
//router.get('/:id/delete', controller.InvoicePayment_delete_get);

// POST request to delete InvoicePayment.
router.post("/:id/delete", controller.delete);

// GET request to update InvoicePayment.
//router.get('/:id/update', controller.InvoicePayment_update_get);

// POST request to update InvoicePayment.
router.post("/:id/update", controller.update);

// GET request for one InvoicePayment.
router.get("/:id", controller.readById);

// GET request for list of all InvoicePayment items.
router.get("/", controller.read);

// add this line App.js
//var InvoicePayment=require("../models/RestFull/Models.Invoices")
//app.use('/InvoicePayment', InvoicePayment); 