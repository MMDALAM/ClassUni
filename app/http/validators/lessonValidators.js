const Validators = require("./validators");
const { check } = require("express-validator");

class lessonValidators extends Validators {
  handle() {
    return [
      check("lessonName")
        .not()
        .isEmpty()
        .withMessage(" نام درس نامعتبر میباشد لطفا مجدد بررسی کنید "),

      check("lessonCode")
        .not()
        .isEmpty()
        .withMessage(" کد درس نمیتواند خالی باشد "),

      check("field")
        .not()
        .isEmpty()
        .withMessage(" گرایش نامعتبر میباشد لطفا مجدد بررسی کنید "),

      check("unit").not().isEmpty().withMessage(" تعداد واحد نباید خالی باشد "),

      check("clock")
        .not()
        .isEmpty()
        .withMessage(" تعداد واحد نباید خالی باشد "),
    ];
  }
}

module.exports = new lessonValidators();
