let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
//Import Controller
var controller = require("../models/RestFull/Models.Invoices");

/// ROUTES ///

// GET catalog home page.
//router.get('/', controller.index);

// GET request for creating a InvoicePrint. NOTE This must come before routes that display InvoicePrint (uses id).
//router.get('/create', controller.InvoicePrint_create_get); Implement if Required

// POST request for creating InvoicePrint.
router.post("/", controller.create);

// GET request to delete InvoicePrint.
//router.get('/:id/delete', controller.InvoicePrint_delete_get);

// POST request to delete InvoicePrint.
router.post("/:id/delete", controller.delete);

// GET request to update InvoicePrint.
//router.get('/:id/update', controller.InvoicePrint_update_get);

// POST request to update InvoicePrint.
router.post("/:id/update", controller.update);

// GET request for one InvoicePrint.
router.get("/:id", controller.readById);

// GET request for list of all InvoicePrint items.
router.get("/", controller.read);

// add this line App.js
//var InvoicePrint=require("../models/RestFull/Models.Invoices")
//app.use('/InvoicePrint', InvoicePrint); 