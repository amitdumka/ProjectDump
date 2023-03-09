let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
//Import Controller
var controller = require("MODEL_PATH");

/// ROUTES ///

// GET catalog home page.
//router.get('/', controller.index);

// GET request for creating a MODEL_NAME. NOTE This must come before routes that display MODEL_NAME (uses id).
//router.get('/create', controller.MODEL_NAME_create_get); Implement if Required

// POST request for creating MODEL_NAME.
router.post("/", controller.create);

// GET request to delete MODEL_NAME.
//router.get('/:id/delete', controller.MODEL_NAME_delete_get);

// POST request to delete MODEL_NAME.
router.post("/:id/delete", controller.delete);

// GET request to update MODEL_NAME.
//router.get('/:id/update', controller.MODEL_NAME_update_get);

// POST request to update MODEL_NAME.
router.post("/:id/update", controller.update);

// GET request for one MODEL_NAME.
router.get("/:id", controller.readById);

// GET request for list of all MODEL_NAME items.
router.get("/", controller.read);

// add this line App.js
//var MODEL_NAME=require("MODEL_PATH")
//app.use('/MODEL_NAME', MODEL_NAME); 