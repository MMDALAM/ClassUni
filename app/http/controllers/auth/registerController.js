const controller = require("app/http/controllers/controller");
const passport = require("passport");

class registerController extends controller {
  showRegisterForm(req, res) {
    res.render("./auth/register");
  }

  async registerProccess(req, res, next) {
    try {
      let result = await this.validationData(req, res, next);
      if (result) return this.register(req, res, next);

      return res.redirect("/admin");
    } catch (err) {
      next(err);
    }
  }

  register(req, res, next) {
    passport.authenticate("local.register", {
      successRedirect: "/",
      failureRedirect: "/auth/register",
      failureFlash: true,
    })(req, res, next);
  }
}

module.exports = new registerController();
