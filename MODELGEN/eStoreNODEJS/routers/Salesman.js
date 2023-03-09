let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
//Import Controller
var controller = require("../models/RestFull/Models.Stores");

/// ROUTES ///

// GET catalog home page.
//router.get('/', controller.index);

// GET request for creating a Salesman. NOTE This must come before routes that display Salesman (uses id).
//router.get('/create', controller.Salesman_create_get); Implement if Required

// POST request for creating Salesman.
router.post("/", controller.create);

// GET request to delete Salesman.
//router.get('/:id/delete', controller.Salesman_delete_get);

// POST request to delete Salesman.
router.post("/:id/delete", controller.delete);

// GET request to update Salesman.
//router.get('/:id/update', controller.Salesman_update_get);

// POST request to update Salesman.
router.post("/:id/update", controller.update);

// GET request for one Salesman.
router.get("/:id", controller.readById);

// GET request for list of all Salesman items.
router.get("/", controller.read);

// add this line App.js
//var Salesman=require("../models/RestFull/Models.Stores")
//app.use('/Salesman', Salesman); 