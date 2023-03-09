let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
//Import Controller
var controller = require("../models/RestFull/Models.Payrolls");

/// ROUTES ///

// GET catalog home page.
//router.get('/', controller.index);

// GET request for creating a Employee. NOTE This must come before routes that display Employee (uses id).
//router.get('/create', controller.Employee_create_get); Implement if Required

// POST request for creating Employee.
router.post("/", controller.create);

// GET request to delete Employee.
//router.get('/:id/delete', controller.Employee_delete_get);

// POST request to delete Employee.
router.post("/:id/delete", controller.delete);

// GET request to update Employee.
//router.get('/:id/update', controller.Employee_update_get);

// POST request to update Employee.
router.post("/:id/update", controller.update);

// GET request for one Employee.
router.get("/:id", controller.readById);

// GET request for list of all Employee items.
router.get("/", controller.read);

// add this line App.js
//var Employee=require("../models/RestFull/Models.Payrolls")
//app.use('/Employee', Employee); 