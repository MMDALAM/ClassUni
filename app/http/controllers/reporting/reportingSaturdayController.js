const controller = require('app/http/controllers/controller');
const Class = require('app/models/class');

class reportingSaturdayController extends controller  {
    async showReportingSaturdayForm(req , res){
        const repSaturday = await this.reportSaturday();

        res.render('./auth/days/reportingSaturday' , {repSaturday});
    }

    
    async reportSaturday (req , res){

        const rep = await  Class.find({ days : "شنبه" }).sort({ classTime1 : 1 });

        const days = [];
        const classId = [];
        const className = [];
        const type = [];
        const classTime1 = [];
        const classTime2 = [];

        rep.forEach(el => {
            days.push(el.days)
            classId.push(el.classId)
            className.push(el.className)
            type.push(el.type)
            classTime1.push(el.classTime1)
            classTime2.push(el.classTime2)
        });
        const finalReport = [rep , days, classId, className , type, classTime1, classTime2]

    return finalReport;

    }  
    
}

module.exports = new reportingSaturdayController();