let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
//Import Controller
var controller = require("../models/RestFull/Models.Users");

/// ROUTES ///

// GET catalog home page.
//router.get('/', controller.index);

// GET request for creating a User. NOTE This must come before routes that display User (uses id).
//router.get('/create', controller.User_create_get); Implement if Required

// POST request for creating User.
router.post("/", controller.create);

// GET request to delete User.
//router.get('/:id/delete', controller.User_delete_get);

// POST request to delete User.
router.post("/:id/delete", controller.delete);

// GET request to update User.
//router.get('/:id/update', controller.User_update_get);

// POST request to update User.
router.post("/:id/update", controller.update);

// GET request for one User.
router.get("/:id", controller.readById);

// GET request for list of all User items.
router.get("/", controller.read);

// add this line App.js
//var User=require("../models/RestFull/Models.Users")
//app.use('/User', User); 