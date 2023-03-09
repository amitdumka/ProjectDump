let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
//Import Controller
var controller = require("../models/RestFull/Models.Invoices");

/// ROUTES ///

// GET catalog home page.
//router.get('/', controller.index);

// GET request for creating a Invoice. NOTE This must come before routes that display Invoice (uses id).
//router.get('/create', controller.Invoice_create_get); Implement if Required

// POST request for creating Invoice.
router.post("/", controller.create);

// GET request to delete Invoice.
//router.get('/:id/delete', controller.Invoice_delete_get);

// POST request to delete Invoice.
router.post("/:id/delete", controller.delete);

// GET request to update Invoice.
//router.get('/:id/update', controller.Invoice_update_get);

// POST request to update Invoice.
router.post("/:id/update", controller.update);

// GET request for one Invoice.
router.get("/:id", controller.readById);

// GET request for list of all Invoice items.
router.get("/", controller.read);

// add this line App.js
//var Invoice=require("../models/RestFull/Models.Invoices")
//app.use('/Invoice', Invoice); 