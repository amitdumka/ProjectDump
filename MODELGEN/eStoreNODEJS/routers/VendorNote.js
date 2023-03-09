let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
//Import Controller
var controller = require("../models/RestFull/Models.Accounts.Vochers");

/// ROUTES ///

// GET catalog home page.
//router.get('/', controller.index);

// GET request for creating a VendorNote. NOTE This must come before routes that display VendorNote (uses id).
//router.get('/create', controller.VendorNote_create_get); Implement if Required

// POST request for creating VendorNote.
router.post("/", controller.create);

// GET request to delete VendorNote.
//router.get('/:id/delete', controller.VendorNote_delete_get);

// POST request to delete VendorNote.
router.post("/:id/delete", controller.delete);

// GET request to update VendorNote.
//router.get('/:id/update', controller.VendorNote_update_get);

// POST request to update VendorNote.
router.post("/:id/update", controller.update);

// GET request for one VendorNote.
router.get("/:id", controller.readById);

// GET request for list of all VendorNote items.
router.get("/", controller.read);

// add this line App.js
//var VendorNote=require("../models/RestFull/Models.Accounts.Vochers")
//app.use('/VendorNote', VendorNote); 