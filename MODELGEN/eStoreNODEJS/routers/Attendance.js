let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
//Import Controller
var controller = require("../models/RestFull/Models.Payrolls");

/// ROUTES ///

// GET catalog home page.
//router.get('/', controller.index);

// GET request for creating a Attendance. NOTE This must come before routes that display Attendance (uses id).
//router.get('/create', controller.Attendance_create_get); Implement if Required

// POST request for creating Attendance.
router.post("/", controller.create);

// GET request to delete Attendance.
//router.get('/:id/delete', controller.Attendance_delete_get);

// POST request to delete Attendance.
router.post("/:id/delete", controller.delete);

// GET request to update Attendance.
//router.get('/:id/update', controller.Attendance_update_get);

// POST request to update Attendance.
router.post("/:id/update", controller.update);

// GET request for one Attendance.
router.get("/:id", controller.readById);

// GET request for list of all Attendance items.
router.get("/", controller.read);

// add this line App.js
//var Attendance=require("../models/RestFull/Models.Payrolls")
//app.use('/Attendance', Attendance); 