let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
//Import Controller
var controller = require("../models/MobileX/Models.Invoices");

/// ROUTES ///

// GET catalog home page.
//router.get('/', controller.index);

// GET request for creating a ProductStock. NOTE This must come before routes that display ProductStock (uses id).
//router.get('/create', controller.ProductStock_create_get); Implement if Required

// POST request for creating ProductStock.
router.post("/", controller.create);

// GET request to delete ProductStock.
//router.get('/:id/delete', controller.ProductStock_delete_get);

// POST request to delete ProductStock.
router.post("/:id/delete", controller.delete);

// GET request to update ProductStock.
//router.get('/:id/update', controller.ProductStock_update_get);

// POST request to update ProductStock.
router.post("/:id/update", controller.update);

// GET request for one ProductStock.
router.get("/:id", controller.readById);

// GET request for list of all ProductStock items.
router.get("/", controller.read);

// add this line App.js
//var ProductStock=require("../models/MobileX/Models.Invoices")
//app.use('/ProductStock', ProductStock); 