let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
//Import Controller
var controller = require("../models/MobileX/Models.Accounts.Vochers");

/// ROUTES ///

// GET catalog home page.
//router.get('/', controller.index);

// GET request for creating a VendorNotes. NOTE This must come before routes that display VendorNotes (uses id).
//router.get('/create', controller.VendorNotes_create_get); Implement if Required

// POST request for creating VendorNotes.
router.post("/", controller.create);

// GET request to delete VendorNotes.
//router.get('/:id/delete', controller.VendorNotes_delete_get);

// POST request to delete VendorNotes.
router.post("/:id/delete", controller.delete);

// GET request to update VendorNotes.
//router.get('/:id/update', controller.VendorNotes_update_get);

// POST request to update VendorNotes.
router.post("/:id/update", controller.update);

// GET request for one VendorNotes.
router.get("/:id", controller.readById);

// GET request for list of all VendorNotes items.
router.get("/", controller.read);

// add this line App.js
//var VendorNotes=require("../models/MobileX/Models.Accounts.Vochers")
//app.use('/VendorNotes', VendorNotes); 