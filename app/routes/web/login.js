const express = require("express");
const router = express.Router();

//controller
const loginController = require("app/http/controllers/auth/loginController");

//Validator
const loginValidators = require("app/http/validators/loginValidators");

//login router
router.get("/", loginController.showLoginForm);
router.post("/", loginValidators.handle(), loginController.loginProccess);

module.exports = router;
