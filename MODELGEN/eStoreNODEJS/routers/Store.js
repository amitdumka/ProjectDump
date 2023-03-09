let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
//Import Controller
var controller = require("../models/RestFull/Models.Stores");

/// ROUTES ///

// GET catalog home page.
//router.get('/', controller.index);

// GET request for creating a Store. NOTE This must come before routes that display Store (uses id).
//router.get('/create', controller.Store_create_get); Implement if Required

// POST request for creating Store.
router.post("/", controller.create);

// GET request to delete Store.
//router.get('/:id/delete', controller.Store_delete_get);

// POST request to delete Store.
router.post("/:id/delete", controller.delete);

// GET request to update Store.
//router.get('/:id/update', controller.Store_update_get);

// POST request to update Store.
router.post("/:id/update", controller.update);

// GET request for one Store.
router.get("/:id", controller.readById);

// GET request for list of all Store items.
router.get("/", controller.read);

// add this line App.js
//var Store=require("../models/RestFull/Models.Stores")
//app.use('/Store', Store); 