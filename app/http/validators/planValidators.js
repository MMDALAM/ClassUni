const Validators = require("./validators");
const { check } = require("express-validator");

class planValidators extends Validators {
  handle() {
    return [
      check("classId")
        .isLength({ min: 2 })
        .withMessage(" لطفا کد کلاس را با دقت وارد کنید "),

      check("field")
        .not()
        .isEmpty()
        .withMessage(" لطفا رشته ای را انتخاب کنید "),

      check("lessonName")
        .not()
        .isEmpty()
        .withMessage(" درس مورد نظر پیدا نشد لطفا مجدد بررسی کنید "),

      check("teacherName")
        .not()
        .isEmpty()
        .withMessage(" لطفا استاد مورد نظر خود را انتخاب کنید "),

      check("termCode")
        .not()
        .isEmpty()
        .withMessage(" لطفا کد ترم را با دقت وارد کنید "),

      check("classTime1")
        .not()
        .isEmpty()
        .withMessage(" لطفا زمان شروع کلاس را با دقت وارد کنید "),

      check("classTime2")
        .not()
        .isEmpty()
        .withMessage(" لطفا زمان پایان کلاس را با دقت وارد کنید "),
    ];
  }
}

module.exports = new planValidators();
