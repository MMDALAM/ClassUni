const controller = require('app/http/controllers/controller');

class planDaysController extends controller  {
    async showPlanDaysForm(req, res) {

        res.render('./teacher/planDays');
    }
    
}

module.exports = new planDaysController();