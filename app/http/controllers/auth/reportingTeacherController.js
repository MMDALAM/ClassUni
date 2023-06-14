const controller = require('app/http/controllers/controller');
const Class = require('app/models/class');
const TeacherAuth = require('app/models/teacherAuth');
const Plan = require('app/models/plan');

class reportingTeacherController extends controller  {
    async showReportingTeacherForm(req , res){
        const repeee = await this.repe();
        
        res.render('./auth/reportingTeacher' , {repeee});
    }

    async reportingTeacherProccess(req , res , next) {
        let result = await this.validationData(req , res)
        if (result) {
            return this.repe(req , res  , next)
        }
            return res.redirect('/auth/reporting')
    }



    async repe(req, res, next) {
        
        const rep = await  Plan.find({ teacherName : req.body.teacherName });

        const days = [];
        const classId = [];
        const type = [];
        const field = [];
        const teacherName = [];
        const lessonName = [];
        const classTime1 = [];
        const classTime2 = [];

        rep.forEach(el => {
            days.push(el.days)
            classId.push(el.classId)
            type.push(el.type)
            field.push(el.field)
            teacherName.push(el.teacherName)
            lessonName.push(el.lessonName)
            classTime1.push(el.classTime1)
            classTime2.push(el.classTime2)
        });
        const finalReport = [rep,days,classId,field,teacherName,lessonName,type,classTime1,classTime2]


        next();

        }


}

module.exports = new reportingTeacherController();