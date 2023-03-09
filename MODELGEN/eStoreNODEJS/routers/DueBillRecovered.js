let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
//Import Controller
var controller = require("../models/MobileX/Models.Sales");

/// ROUTES ///

// GET catalog home page.
//router.get('/', controller.index);

// GET request for creating a DueBillRecovered. NOTE This must come before routes that display DueBillRecovered (uses id).
//router.get('/create', controller.DueBillRecovered_create_get); Implement if Required

// POST request for creating DueBillRecovered.
router.post("/", controller.create);

// GET request to delete DueBillRecovered.
//router.get('/:id/delete', controller.DueBillRecovered_delete_get);

// POST request to delete DueBillRecovered.
router.post("/:id/delete", controller.delete);

// GET request to update DueBillRecovered.
//router.get('/:id/update', controller.DueBillRecovered_update_get);

// POST request to update DueBillRecovered.
router.post("/:id/update", controller.update);

// GET request for one DueBillRecovered.
router.get("/:id", controller.readById);

// GET request for list of all DueBillRecovered items.
router.get("/", controller.read);

// add this line App.js
//var DueBillRecovered=require("../models/MobileX/Models.Sales")
//app.use('/DueBillRecovered', DueBillRecovered); 