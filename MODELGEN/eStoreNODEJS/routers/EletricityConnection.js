let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
//Import Controller
var controller = require("../models/RestFull/Models.Accounts.Facilities");

/// ROUTES ///

// GET catalog home page.
//router.get('/', controller.index);

// GET request for creating a EletricityConnection. NOTE This must come before routes that display EletricityConnection (uses id).
//router.get('/create', controller.EletricityConnection_create_get); Implement if Required

// POST request for creating EletricityConnection.
router.post("/", controller.create);

// GET request to delete EletricityConnection.
//router.get('/:id/delete', controller.EletricityConnection_delete_get);

// POST request to delete EletricityConnection.
router.post("/:id/delete", controller.delete);

// GET request to update EletricityConnection.
//router.get('/:id/update', controller.EletricityConnection_update_get);

// POST request to update EletricityConnection.
router.post("/:id/update", controller.update);

// GET request for one EletricityConnection.
router.get("/:id", controller.readById);

// GET request for list of all EletricityConnection items.
router.get("/", controller.read);

// add this line App.js
//var EletricityConnection=require("../models/RestFull/Models.Accounts.Facilities")
//app.use('/EletricityConnection', EletricityConnection); 