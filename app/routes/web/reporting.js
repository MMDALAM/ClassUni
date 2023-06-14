const express = require("express");
const router = express.Router();

const reportingSaturdayController = require("app/http/controllers/reporting/reportingSaturdayController");
const reportingSundayController = require("app/http/controllers/reporting/reportingSundayController");
const reportingMondayController = require("app/http/controllers/reporting/reportingMondayController");
const reportingTuesdayController = require("app/http/controllers/reporting/reportingTuesdayController");
const reportingWednesdayController = require("app/http/controllers/reporting/reportingWednesdayController");

const planSaturdayController = require("app/http/controllers/plan/planSaturdayController");
const planSundayController = require("app/http/controllers/plan/planSundayController");
const planMondayController = require("app/http/controllers/plan/planMondayController");
const planTuesdayController = require("app/http/controllers/plan/planTuesdayController");
const planWednesdayController = require("app/http/controllers/plan/planWednesdayController");

//reporting
router.get(
  "/reportingSaturday",
  reportingSaturdayController.showReportingSaturdayForm
);
router.get(
  "/reportingSunday",
  reportingSundayController.showReportingSundayForm
);
router.get(
  "/reportingMonday",
  reportingMondayController.showReportingMondayForm
);
router.get(
  "/reportingTuesday",
  reportingTuesdayController.showReportingTuesdayForm
);
router.get(
  "/reportingWednesday",
  reportingWednesdayController.showReportingWednesdayForm
);

//plan
router.get("/planSaturday", planSaturdayController.showPlanSaturdayForm);
router.get("/planSunday", planSundayController.showPlanSundayForm);
router.get("/planMonday", planMondayController.showPlanMondayForm);
router.get("/planTuesday", planTuesdayController.showPlanTuesdayForm);
router.get("/planWednesday", planWednesdayController.showPlanWednesdayForm);

//PDF
router.get("/pdfSaturday", planSaturdayController.pdf);
router.get("/pdfSunday", planSundayController.pdf);
router.get("/pdfMonday", planMondayController.pdf);
router.get("/pdfTuesday", planTuesdayController.pdf);
router.get("/pdfWednesday", planWednesdayController.pdf);

module.exports = router;
