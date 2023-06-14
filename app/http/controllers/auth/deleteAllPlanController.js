const controller = require("app/http/controllers/controller");
const Plan = require("app/models/plan");

class deleteAllPlanController extends controller {
  async deleteAllPlanProccess(req, res, next) {
    try {
      this.alert(req, {
        title: "دقت کنید",
        message: "میخواهید برنامه را پاک کنید و بازگشتی ندارد",
        type: "warning",
        button: "بله",
      });
      return this.back(req, res);
    } catch (err) {
      next(err);
    }
  }

  async deleteAllPlans(req, res, next) {
    try {
      await Plan.deleteMany({});
      return this.back(req, res);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new deleteAllPlanController();
