let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
//Import Controller
var controller = require("../models/RestFull/Models.Accounts.Vochers");

/// ROUTES ///

// GET catalog home page.
//router.get('/', controller.index);

// GET request for creating a Voucher. NOTE This must come before routes that display Voucher (uses id).
//router.get('/create', controller.Voucher_create_get); Implement if Required

// POST request for creating Voucher.
router.post("/", controller.create);

// GET request to delete Voucher.
//router.get('/:id/delete', controller.Voucher_delete_get);

// POST request to delete Voucher.
router.post("/:id/delete", controller.delete);

// GET request to update Voucher.
//router.get('/:id/update', controller.Voucher_update_get);

// POST request to update Voucher.
router.post("/:id/update", controller.update);

// GET request for one Voucher.
router.get("/:id", controller.readById);

// GET request for list of all Voucher items.
router.get("/", controller.read);

// add this line App.js
//var Voucher=require("../models/RestFull/Models.Accounts.Vochers")
//app.use('/Voucher', Voucher); 