const controller = require('app/http/controllers/controller');
const pdfService = require('./pdf-service');
const Plan = require('app/models/plan');

class planMondayController extends controller  {
    async showPlanMondayForm(req , res){
        const repMonday = await this.planMonday();

        res.render('./auth/daysPlan/planMonday' , {repMonday});
    }
    
    async planMonday (req , res){
        const rep = await  Plan.find({ days : "دوشنبه" }).sort({ classId : 1 }).sort({ field : 1 }).sort({ classTime1 : 1 }).sort({ termCode : 1 });

        const days = [];
        const classId = [];
        const className = [];
        const type = [];
        const field = [];
        const teacherName = [];
        const lessonName = [];
        const termCode = [];
        const timeStart = [];
        const timeEnd = [];
        

        rep.forEach(el => {
            days.push(el.days)
            classId.push(el.classId)
            className.push(el.className)
            type.push(el.type)
            field.push(el.field)
            teacherName.push(el.teacherName)
            lessonName.push(el.lessonName)
            timeStart.push(el.timeStart)
            timeEnd.push(el.timeEnd)
            termCode.push(el.termCode)
        });
        const finalReport = [rep,days,classId,className,field,teacherName,lessonName,type,timeStart,timeEnd,termCode]

    return finalReport;

    }

    async pdf(req, res,next) {
        try {
            const stream = res.writeHead(200, {
                'Content-Type': 'application/pdf',
                'Content-Disposition' : 'attachment; filename=File_Name.pdf'
                
            });

            pdfService.buildPDFMonday(
                (chunk) => stream.write(chunk),
                () => stream.end()
            );

            

            // return res.redirect('./auth/reporting');
        } catch (err) {
            next(err)
        }    
    }
    
}

module.exports = new planMondayController();