const Validators = require("./validators");
const { check } = require("express-validator");

class registerValidator extends Validators {
  handle() {
    return [
      check("name")
        .isLength({ min: 2 })
        .withMessage(" فیلد نام نامعتبر میباشد لطفا مجدد بررسی کنید "),

      check("username")
        .isLength({ min: 2 })
        .withMessage(" فیلد نام کاربری باید متن باشد و بیشتر از 2 حروف باشد "),

      check("password")
        .isLength({ min: 4 })
        .withMessage("رمزعبور نمیتواند کمتر از 4 کاکتر باشد"),
    ];
  }
}

module.exports = new registerValidator();
