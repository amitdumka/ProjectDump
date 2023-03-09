let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
//Import Controller
var controller = require("../models/MobileX/Models.Invoices");

/// ROUTES ///

// GET catalog home page.
//router.get('/', controller.index);

// GET request for creating a Stock. NOTE This must come before routes that display Stock (uses id).
//router.get('/create', controller.Stock_create_get); Implement if Required

// POST request for creating Stock.
router.post("/", controller.create);

// GET request to delete Stock.
//router.get('/:id/delete', controller.Stock_delete_get);

// POST request to delete Stock.
router.post("/:id/delete", controller.delete);

// GET request to update Stock.
//router.get('/:id/update', controller.Stock_update_get);

// POST request to update Stock.
router.post("/:id/update", controller.update);

// GET request for one Stock.
router.get("/:id", controller.readById);

// GET request for list of all Stock items.
router.get("/", controller.read);

// add this line App.js
//var Stock=require("../models/MobileX/Models.Invoices")
//app.use('/Stock', Stock); 