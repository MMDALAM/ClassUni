const controller = require('app/http/controllers/controller');
const Class = require('app/models/class');

class reportingMondayController extends controller  {
    async showReportingMondayForm(req , res){
        const repMonday = await this.reportMonday();

        res.render('./auth/days/reportingMonday' , {repMonday});
    }

    
    async reportMonday (req , res){

        const rep = await  Class.find({ days : "دوشنبه" });

        const days = [];
        const classId = [];
        const type = [];
        const classTime1 = [];
        const classTime2 = [];

        rep.forEach(el => {
            days.push(el.days)
            classId.push(el.classId)
            type.push(el.type)
            classTime1.push(el.classTime1)
            classTime2.push(el.classTime2)
        });
        const finalReport = [rep , days, classId, type, classTime1, classTime2]

    return finalReport;

    }
    
    
}

module.exports = new reportingMondayController();