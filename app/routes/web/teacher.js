const express = require("express");
const router = express.Router();

//controller
const teacherController = require("app/http/controllers/teacherController");
const myClassController = require("app/http/controllers/teacher/myClassController");
const planDaysController = require("app/http/controllers/teacher/planDaysController");
const classesController = require("app/http/controllers/teacher/classesController");
const classSingleController = require("app/http/controllers/teacher/classSingleController");
const planDays1Controller = require("app/http/controllers/teacher/plans/planDays1Controller");
const planDays2Controller = require("app/http/controllers/teacher/plans/planDays2Controller");
const planDays3Controller = require("app/http/controllers/teacher/plans/planDays3Controller");
const planDays4Controller = require("app/http/controllers/teacher/plans/planDays4Controller");
const planDays5Controller = require("app/http/controllers/teacher/plans/planDays5Controller");
const planDays6Controller = require("app/http/controllers/teacher/plans/planDays6Controller");

//validators
const planValidators = require("app/http/validators/planValidators");

//home router
router.get("/", teacherController.index);

//my class
router.get("/myClass", myClassController.myClass);

//delete class
router.post("/delete/:id", myClassController.deletePlan);

//edit class
router.get("/edit/:id", myClassController.editPlan);
// router.post('/edit/:id', myClassController.editPlan);

//plan
router.get("/planDays", planDaysController.showPlanDaysForm);

//classes
router.get("/classes1", classesController.showClass1Form);
router.get("/classes2", classesController.showClass2Form);
router.get("/classes3", classesController.showClass3Form);
router.get("/classes4", classesController.showClass4Form);
router.get("/classes5", classesController.showClass5Form);

router.get("/single-class/:id", classSingleController.single);
router.post(
  "/single-class",
  planValidators.handle(),
  classSingleController.planDaysProccess
);

//planDays
router.get("/planDays1", planDays1Controller.showPlanDays1Form);
router.post(
  "/planDays1",
  planValidators.handle(),
  planDays1Controller.planDays1Proccess
);

router.get("/planDays2", planDays2Controller.showPlanDays2Form);
router.post(
  "/plan/planDays2",
  planValidators.handle(),
  planDays2Controller.planDays2Proccess
);

router.get("/planDays3", planDays3Controller.showPlanDays3Form);
router.post(
  "/plan/planDays3",
  planValidators.handle(),
  planDays3Controller.planDays3Proccess
);

router.get("/planDays4", planDays4Controller.showPlanDays4Form);
router.post(
  "/plan/planDays4",
  planValidators.handle(),
  planDays4Controller.planDays4Proccess
);

router.get("/planDays5", planDays5Controller.showPlanDays5Form);
router.post(
  "/plan/planDays5",
  planValidators.handle(),
  planDays5Controller.planDays5Proccess
);

router.get("/planDays6", planDays6Controller.showPlanDays6Form);
router.post(
  "/plan/planDays6",
  planValidators.handle(),
  planDays6Controller.planDays6Proccess
);

//logout
router.post("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

module.exports = router;
