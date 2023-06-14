const Validators = require("./validators");
const { check } = require("express-validator");

class reportingValidators extends Validators {
  handle() {
    return [
      check("teacherName")
        .not()
        .isEmpty()
        .withMessage(" کد استاد نامعتبر میباشد لطفا مجدد بررسی کنید "),
    ];
  }
}

module.exports = new reportingValidators();
