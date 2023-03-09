let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
//Import Controller
var controller = require("../models/RestFull/Models.Accounts.Renting");

/// ROUTES ///

// GET catalog home page.
//router.get('/', controller.index);

// GET request for creating a Rent. NOTE This must come before routes that display Rent (uses id).
//router.get('/create', controller.Rent_create_get); Implement if Required

// POST request for creating Rent.
router.post("/", controller.create);

// GET request to delete Rent.
//router.get('/:id/delete', controller.Rent_delete_get);

// POST request to delete Rent.
router.post("/:id/delete", controller.delete);

// GET request to update Rent.
//router.get('/:id/update', controller.Rent_update_get);

// POST request to update Rent.
router.post("/:id/update", controller.update);

// GET request for one Rent.
router.get("/:id", controller.readById);

// GET request for list of all Rent items.
router.get("/", controller.read);

// add this line App.js
//var Rent=require("../models/RestFull/Models.Accounts.Renting")
//app.use('/Rent', Rent); 