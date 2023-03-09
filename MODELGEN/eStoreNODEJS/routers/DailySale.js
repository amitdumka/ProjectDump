let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
//Import Controller
var controller = require("../models/MobileX/Models.Sales");

/// ROUTES ///

// GET catalog home page.
//router.get('/', controller.index);

// GET request for creating a DailySale. NOTE This must come before routes that display DailySale (uses id).
//router.get('/create', controller.DailySale_create_get); Implement if Required

// POST request for creating DailySale.
router.post("/", controller.create);

// GET request to delete DailySale.
//router.get('/:id/delete', controller.DailySale_delete_get);

// POST request to delete DailySale.
router.post("/:id/delete", controller.delete);

// GET request to update DailySale.
//router.get('/:id/update', controller.DailySale_update_get);

// POST request to update DailySale.
router.post("/:id/update", controller.update);

// GET request for one DailySale.
router.get("/:id", controller.readById);

// GET request for list of all DailySale items.
router.get("/", controller.read);

// add this line App.js
//var DailySale=require("../models/MobileX/Models.Sales")
//app.use('/DailySale', DailySale); 