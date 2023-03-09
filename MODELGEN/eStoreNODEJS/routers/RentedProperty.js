let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
//Import Controller
var controller = require("../models/RestFull/Models.Accounts.Renting");

/// ROUTES ///

// GET catalog home page.
//router.get('/', controller.index);

// GET request for creating a RentedProperty. NOTE This must come before routes that display RentedProperty (uses id).
//router.get('/create', controller.RentedProperty_create_get); Implement if Required

// POST request for creating RentedProperty.
router.post("/", controller.create);

// GET request to delete RentedProperty.
//router.get('/:id/delete', controller.RentedProperty_delete_get);

// POST request to delete RentedProperty.
router.post("/:id/delete", controller.delete);

// GET request to update RentedProperty.
//router.get('/:id/update', controller.RentedProperty_update_get);

// POST request to update RentedProperty.
router.post("/:id/update", controller.update);

// GET request for one RentedProperty.
router.get("/:id", controller.readById);

// GET request for list of all RentedProperty items.
router.get("/", controller.read);

// add this line App.js
//var RentedProperty=require("../models/RestFull/Models.Accounts.Renting")
//app.use('/RentedProperty', RentedProperty); 