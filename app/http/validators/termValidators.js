const Validators = require("./validators");
const { check } = require("express-validator");

class termValidators extends Validators {
  handle() {
    return [
      check("termYear").not().isEmpty().withMessage(" سال ترم نامعتبر است "),

      check("termCode").not().isEmpty().withMessage(" کد ترم نامعتبر است "),
    ];
  }
}

module.exports = new termValidators();
