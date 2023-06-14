const express = require("express");
const router = express.Router();

// //Controller
const adminController = require("app/http/controllers/adminController");
const fieldController = require("app/http/controllers/admin/fieldController");

// Validators
const fieldValidators = require("app/http/validators/fieldValidators");
const termValidators = require("app/http/validators/termValidators");

// admin
router.get("/", adminController.index);

//accessLevel
router.get("/access", adminController.access);
router.get("/accessLevel/:id", adminController.accessLevel);
router.post("/accessLevel/delete/:id", adminController.delete);

router.get("/field", fieldController.showFieldForm);
router.post("/field", fieldValidators.handle(), fieldController.fieldProccess);

router.get("/term", adminController.showTermForm);
router.post("/term", termValidators.handle(), adminController.termProccess);

module.exports = router;
