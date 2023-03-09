let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
//Import Controller
var controller = require("../models/RestFull/Models.Accounts.Vochers");

/// ROUTES ///

// GET catalog home page.
//router.get('/', controller.index);

// GET request for creating a Note. NOTE This must come before routes that display Note (uses id).
//router.get('/create', controller.Note_create_get); Implement if Required

// POST request for creating Note.
router.post("/", controller.create);

// GET request to delete Note.
//router.get('/:id/delete', controller.Note_delete_get);

// POST request to delete Note.
router.post("/:id/delete", controller.delete);

// GET request to update Note.
//router.get('/:id/update', controller.Note_update_get);

// POST request to update Note.
router.post("/:id/update", controller.update);

// GET request for one Note.
router.get("/:id", controller.readById);

// GET request for list of all Note items.
router.get("/", controller.read);

// add this line App.js
//var Note=require("../models/RestFull/Models.Accounts.Vochers")
//app.use('/Note', Note); 