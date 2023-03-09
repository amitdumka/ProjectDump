let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
//Import Controller
var controller = require("../models/RestFull/Models.Invoices");

/// ROUTES ///

// GET catalog home page.
//router.get('/', controller.index);

// GET request for creating a InvoiceItem. NOTE This must come before routes that display InvoiceItem (uses id).
//router.get('/create', controller.InvoiceItem_create_get); Implement if Required

// POST request for creating InvoiceItem.
router.post("/", controller.create);

// GET request to delete InvoiceItem.
//router.get('/:id/delete', controller.InvoiceItem_delete_get);

// POST request to delete InvoiceItem.
router.post("/:id/delete", controller.delete);

// GET request to update InvoiceItem.
//router.get('/:id/update', controller.InvoiceItem_update_get);

// POST request to update InvoiceItem.
router.post("/:id/update", controller.update);

// GET request for one InvoiceItem.
router.get("/:id", controller.readById);

// GET request for list of all InvoiceItem items.
router.get("/", controller.read);

// add this line App.js
//var InvoiceItem=require("../models/RestFull/Models.Invoices")
//app.use('/InvoiceItem', InvoiceItem); 