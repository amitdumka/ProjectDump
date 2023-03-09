let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
//Import Controller
var controller = require("../models/RestFull/Models.Accounts.Banking");

/// ROUTES ///

// GET catalog home page.
//router.get('/', controller.index);

// GET request for creating a Bank. NOTE This must come before routes that display Bank (uses id).
//router.get('/create', controller.Bank_create_get); Implement if Required

// POST request for creating Bank.
router.post("/", controller.create);

// GET request to delete Bank.
//router.get('/:id/delete', controller.Bank_delete_get);

// POST request to delete Bank.
router.post("/:id/delete", controller.delete);

// GET request to update Bank.
//router.get('/:id/update', controller.Bank_update_get);

// POST request to update Bank.
router.post("/:id/update", controller.update);

// GET request for one Bank.
router.get("/:id", controller.readById);

// GET request for list of all Bank items.
router.get("/", controller.read);

// add this line App.js
//var Bank=require("../models/RestFull/Models.Accounts.Banking")
//app.use('/Bank', Bank); 