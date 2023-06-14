const Validators = require("./validators");
const { check } = require("express-validator");

class deleteClassValidators extends Validators {
  handle() {
    return [
      check("classId")
        .not()
        .isEmpty()
        .withMessage(" کد کلاس نمیتواند خالی باشد "),
    ];
  }
}

module.exports = new deleteClassValidators();
