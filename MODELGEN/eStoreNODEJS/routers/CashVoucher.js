let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
//Import Controller
var controller = require("../models/RestFull/Models.Accounts.Vochers");

/// ROUTES ///

// GET catalog home page.
//router.get('/', controller.index);

// GET request for creating a CashVoucher. NOTE This must come before routes that display CashVoucher (uses id).
//router.get('/create', controller.CashVoucher_create_get); Implement if Required

// POST request for creating CashVoucher.
router.post("/", controller.create);

// GET request to delete CashVoucher.
//router.get('/:id/delete', controller.CashVoucher_delete_get);

// POST request to delete CashVoucher.
router.post("/:id/delete", controller.delete);

// GET request to update CashVoucher.
//router.get('/:id/update', controller.CashVoucher_update_get);

// POST request to update CashVoucher.
router.post("/:id/update", controller.update);

// GET request for one CashVoucher.
router.get("/:id", controller.readById);

// GET request for list of all CashVoucher items.
router.get("/", controller.read);

// add this line App.js
//var CashVoucher=require("../models/RestFull/Models.Accounts.Vochers")
//app.use('/CashVoucher', CashVoucher); 