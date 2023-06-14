const Validators = require("./validators");
const { check } = require("express-validator");

class classValidators extends Validators {
  handle() {
    return [
      check("classId")
        .not()
        .isEmpty()
        .withMessage(" کد کلاس نمیتواند خالی باشد "),

      check("className")
        .not()
        .isEmpty()
        .withMessage("نام کلاس نمیتواند خالی باشد "),

      check("type").not().isEmpty().withMessage(" لطفا نوع را انتخاب کنید "),

      check("days").not().isEmpty().withMessage(" لطفا روز را انتخاب کنید "),
    ];
  }
}

module.exports = new classValidators();
