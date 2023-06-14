const Validators = require("./validators");
const { check } = require("express-validator");

class fieldValidators extends Validators {
  handle() {
    return [
      check("fieldName").not().isEmpty().withMessage(" نام رشته نامعتبر است "),

      check("fieldCode")
        .isLength({ min: 2 })
        .withMessage(" کد رشته نامعتبر است "),
    ];
  }
}

module.exports = new fieldValidators();
