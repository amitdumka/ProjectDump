let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
//Import Controller
var controller = require("../models/RestFull/Models.Accounts.Facilities");

/// ROUTES ///

// GET catalog home page.
//router.get('/', controller.index);

// GET request for creating a EletricityBill. NOTE This must come before routes that display EletricityBill (uses id).
//router.get('/create', controller.EletricityBill_create_get); Implement if Required

// POST request for creating EletricityBill.
router.post("/", controller.create);

// GET request to delete EletricityBill.
//router.get('/:id/delete', controller.EletricityBill_delete_get);

// POST request to delete EletricityBill.
router.post("/:id/delete", controller.delete);

// GET request to update EletricityBill.
//router.get('/:id/update', controller.EletricityBill_update_get);

// POST request to update EletricityBill.
router.post("/:id/update", controller.update);

// GET request for one EletricityBill.
router.get("/:id", controller.readById);

// GET request for list of all EletricityBill items.
router.get("/", controller.read);

// add this line App.js
//var EletricityBill=require("../models/RestFull/Models.Accounts.Facilities")
//app.use('/EletricityBill', EletricityBill); 