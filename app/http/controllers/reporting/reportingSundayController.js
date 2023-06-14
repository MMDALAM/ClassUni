const controller = require('app/http/controllers/controller');
const Class = require('app/models/class');

class reportingSundayController extends controller  {
    async showReportingSundayForm(req , res){
        const repSunday = await this.reportSunday();

        res.render('./auth/days/reportingSunday' , {repSunday});
    }

    
    async reportSunday (req , res){

        const rep = await  Class.find({ days : "یک شنبه" });

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

module.exports = new reportingSundayController();