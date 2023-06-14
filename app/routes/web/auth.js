const express = require("express");
const router = express.Router();

//Controller
const registerController = require("app/http/controllers/auth/registerController");
const lessonController = require("app/http/controllers/auth/lessonController");
const classController = require("app/http/controllers/auth/classController");
const teacherAuthController = require("app/http/controllers/auth/teacherAuthController");
const planController = require("app/http/controllers/auth/planController");
const deleteAllPlanController = require("app/http/controllers/auth/deleteAllPlanController");
const deleteClassController = require("app/http/controllers/auth/deleteClassController");
const deletePlanController = require("app/http/controllers/auth/deletePlanController");
const reportingController = require("app/http/controllers/auth/reportingController");
// const reportingTeacherController = require('app/http/controllers/auth/reportingTeacherController');

//validators
const registerValidators = require("app/http/validators/registerValidators");
const lessonValidators = require("app/http/validators/lessonValidators");
const classValidators = require("app/http/validators/classValidators");
const teacherAuthValidators = require("app/http/validators/teacherAuthValidators");
const planValidators = require("app/http/validators/planValidators");
const deleteClassValidators = require("app/http/validators/deleteClassValidators");
const reportingValidators = require("app/http/validators/reportingValidators");

// admin routes
router.get("/register", registerController.showRegisterForm);
router.post(
  "/register",
  registerValidators.handle(),
  registerController.registerProccess
);

// lesson routes
router.get("/lesson", lessonController.showLessonForm);
router.post(
  "/lesson",
  lessonValidators.handle(),
  lessonController.lessonProccess
);

// class routes
router.get("/class", classController.showClassForm);
router.post("/class", classValidators.handle(), classController.classProccess);

// plan routes
router.get("/plan", planController.showPlanForm);
router.post("/plan", planValidators.handle(), planController.planProccess);

// teacher routes
router.get("/teacherAuth", teacherAuthController.showteacherAuthForm);
router.post(
  "/teacherAuth",
  teacherAuthValidators.handle(),
  teacherAuthController.teacherAuthProccess
);

// deleteClass ruters
router.get("/deleteClass", deleteClassController.showDeleteClassForm);
router.post(
  "/deleteClass",
  deleteClassValidators.handle(),
  deleteClassController.deleteClassProccess
);
router.post("/deletePlan", deletePlanController.deletePlanProccess);
router.post("/deleteAllPlan", deleteAllPlanController.deleteAllPlanProccess);
router.get("/deleteAllPlans", deleteAllPlanController.deleteAllPlans);

// reporting routes
router.get("/reporting", reportingController.showReportingForm);
router.post(
  "/reporting",
  reportingValidators.handle(),
  reportingController.reportingProccess
);

//excel
router.get("/excel", reportingController.excel);

module.exports = router;
