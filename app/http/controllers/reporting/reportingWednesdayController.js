const controller = require('app/http/controllers/controller');
const Class = require('app/models/class');

class reportingWednesdayController extends controller  {
    async showReportingWednesdayForm(req , res){
        const repWednesday = await this.reportWednesday();

        res.render('./auth/days/reportingWednesday' , {repWednesday});
    }

    
    async reportWednesday (req , res){

        const rep = await  Class.find({ days : "چهارشنبه" });

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

module.exports = new reportingWednesdayController();