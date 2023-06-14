const Validators = require("./validators");
const { check } = require("express-validator");

class teacherAuthValidators extends Validators {
  handle() {
    return [
      check("teacherName")
        .not()
        .isEmpty()
        .withMessage("  نام استاد نامعتبر میباشد لطفا مجدد بررسی کنید "),

      check("teacherCode")
        .not()
        .isEmpty()
        .withMessage(" کد استاد نمیتواند خالی باشد "),

      check("field")
        .not()
        .isEmpty()
        .withMessage(" لطفا گزینه ای را انتخاب کنید "),
    ];
  }
}

module.exports = new teacherAuthValidators();
