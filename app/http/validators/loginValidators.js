const Validators = require("./validators");
const { check } = require("express-validator");

class loginValidator extends Validators {
  handle() {
    return [
      check("username")
        .isLength({ min: 2 })
        .withMessage("نام کاربری و یا رمز عبور اشتباه است"),

      check("password")
        .isLength({ min: 4 })
        .withMessage("نام کاربری و یا رمز عبور اشتباه است"),
    ];
  }
}

module.exports = new loginValidator();
