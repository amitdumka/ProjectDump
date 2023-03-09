let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
//Import Controller
var controller = require("../models/MobileX/Models.Sales");

/// ROUTES ///

// GET catalog home page.
//router.get('/', controller.index);

// GET request for creating a DueBill. NOTE This must come before routes that display DueBill (uses id).
//router.get('/create', controller.DueBill_create_get); Implement if Required

// POST request for creating DueBill.
router.post("/", controller.create);

// GET request to delete DueBill.
//router.get('/:id/delete', controller.DueBill_delete_get);

// POST request to delete DueBill.
router.post("/:id/delete", controller.delete);

// GET request to update DueBill.
//router.get('/:id/update', controller.DueBill_update_get);

// POST request to update DueBill.
router.post("/:id/update", controller.update);

// GET request for one DueBill.
router.get("/:id", controller.readById);

// GET request for list of all DueBill items.
router.get("/", controller.read);

// add this line App.js
//var DueBill=require("../models/MobileX/Models.Sales")
//app.use('/DueBill', DueBill); 