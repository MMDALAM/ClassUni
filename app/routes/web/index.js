const express = require("express");
const router = express.Router();

//middleware
const redirectIfAuthenticated = require("app/http/middleware/redirectIfAuthenticated");
const redirectIfNotAdmin = require("app/http/middleware/redirectIfNotAdmin");
const errorHandler = require("app/http/middleware/errorHandler");

//home router
const loginRouter = require("./login");
router.use("/", loginRouter);

//admin router
const adminRouter = require("./admin");
router.use("/admin", adminRouter);

//auth router
const authRouter = require("./auth");
router.use("/auth", authRouter);

// teacher router
const teacherRouter = require("./teacher");
router.use("/teacher", teacherRouter);

// reporting router
const reportingRouter = require("./reporting");
router.use("/reporting", redirectIfAuthenticated.handle, reportingRouter);

//logout
router.post("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

//errorHandler
router.all("*", errorHandler.error404);
router.use(errorHandler.handler);

module.exports = router;
