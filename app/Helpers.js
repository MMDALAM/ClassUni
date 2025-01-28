const moment = require("jalali-moment");
const autoBind = require("auto-bind-inheritance");
moment.locale("fa", { useGregorianParser: true });

module.exports = class Helpers {
  constructor(req, res) {
    autoBind(this);
    this.req = req;
    this.res = res;
    this.formData = req.flash("formData")[0];
  }

  getObjects() {
    return {
      auth: this.auth(),
      viewPath: this.viewPath,
      ...this.getGlobalVaribales(),
      date: this.date,
      old: this.old,
      req: this.req,
    };
  }

  auth() {
    return {
      check: this.req.isAuthenticated(),
      user: this.req.user,
    };
  }

  date(time) {
    return moment(time);
  }

  getGlobalVaribales() {
    return {
      errors: this.req.flash("errors"),
    };
  }

  old(field, defaultValue = "") {
    return this.formData && this.formData.hasOwnProperty(field)
      ? this.formData[field]
      : defaultValue;
  }
};
