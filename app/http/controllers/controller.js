const autoBind = require("auto-bind-inheritance");
const isMongoId = require("validator/lib/isMongoId");
const { validationResult } = require("express-validator");

module.exports = class controller {
  constructor() {
    autoBind(this);
  }

  async validationData(req) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      const errors = result.array();
      const messages = [];

      errors.forEach((err) => messages.push(err.msg));

      req.flash("errors", messages);

      return false;
    }

    return true;
  }

  async back(req, res) {
    await req.flash("formData", req.body);
    return res.redirect(req.header("Referer") || "/");
  }

  isMongoId(paramId) {
    if (!isMongoId(paramId)) {
      throw new Error("ای دی وارد شده صحیح نیست");
    }
  }

  error(message, status = 500) {
    let err = new Error(message);
    err.status = status;
    throw err;
  }

  async alert(req, data) {
    let title = data.title || "",
      message = data.message || "",
      icon = data.icon || "info",
      button = data.button || null,
      timer = data.timer || 2000;

    await req.flash("sweetalert", { title, message, icon, button, timer });
  }
};
