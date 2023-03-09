let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
//Import Controller
var controller = require("../models/RestFull/Models.Accounts.Banking");

/// ROUTES ///

// GET catalog home page.
//router.get('/', controller.index);

// GET request for creating a BankAccount. NOTE This must come before routes that display BankAccount (uses id).
//router.get('/create', controller.BankAccount_create_get); Implement if Required

// POST request for creating BankAccount.
router.post("/", controller.create);

// GET request to delete BankAccount.
//router.get('/:id/delete', controller.BankAccount_delete_get);

// POST request to delete BankAccount.
router.post("/:id/delete", controller.delete);

// GET request to update BankAccount.
//router.get('/:id/update', controller.BankAccount_update_get);

// POST request to update BankAccount.
router.post("/:id/update", controller.update);

// GET request for one BankAccount.
router.get("/:id", controller.readById);

// GET request for list of all BankAccount items.
router.get("/", controller.read);

// add this line App.js
//var BankAccount=require("../models/RestFull/Models.Accounts.Banking")
//app.use('/BankAccount', BankAccount); 