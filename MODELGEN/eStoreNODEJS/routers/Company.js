let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
//Import Controller
var controller = require("../models/RestFull/Models.Stores");

/// ROUTES ///

// GET catalog home page.
//router.get('/', controller.index);

// GET request for creating a Company. NOTE This must come before routes that display Company (uses id).
//router.get('/create', controller.Company_create_get); Implement if Required

// POST request for creating Company.
router.post("/", controller.create);

// GET request to delete Company.
//router.get('/:id/delete', controller.Company_delete_get);

// POST request to delete Company.
router.post("/:id/delete", controller.delete);

// GET request to update Company.
//router.get('/:id/update', controller.Company_update_get);

// POST request to update Company.
router.post("/:id/update", controller.update);

// GET request for one Company.
router.get("/:id", controller.readById);

// GET request for list of all Company items.
router.get("/", controller.read);

// add this line App.js
//var Company=require("../models/RestFull/Models.Stores")
//app.use('/Company', Company); 