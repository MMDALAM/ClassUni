const controller = require('app/http/controllers/controller');
const Class = require('app/models/class');
const Plan = require('app/models/plan');
const ExcelJs = require('exceljs');
const TeacherAuth = require('app/models/teacherAuth');

class reportingController extends controller  {
    async showReportingForm(req , res){
        const reporting = await this.rep();
        const teachersAuth = await this.Teachers();

        res.render('./auth/reporting' , {reporting , teachersAuth});
    }


    async reportingProccess(req , res , next) {
        let result = await this.validationData(req , res)
        if (result) {
            return this.repe(req , res  , next)
        }
            return res.redirect('/auth/reporting')
    }

    async Teachers(req , res){
        const Teachers = await TeacherAuth.find()

        const teacherName = [];
        Teachers.forEach((el) =>{
            teacherName.push(el.teacherName);
        })
        return teacherName;
    }      

    async rep(req , res , next){
        const classReserve = await Class.find({ Reserve : false });
        const classRes = [];
        classReserve.forEach((el) =>{
            classRes.push(el.classId);
        })

        if(!classRes){
            req.flash('errors' , ' اطلاعات وجود ندارد ');
            return res.redirect('/auth/reporting');
        }else{
        
            return classRes;
        }
    }

    async excel(req, res, next) {
        try {
   
            const stream = res.writeHead(200, {
                'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition' : 'attachment; filename =General_Plan.xlsx'
            });
            const plansh = await Plan.find({ days: 'شنبه' }).sort({ classId: 1 }).sort({ classTime1: 1 });

            const planyk = await Plan.find({ days: 'یک شنبه' }).sort({ classId: 1 }).sort({ classTime1: 1 });

            const plando = await Plan.find({ days: 'دوشنبه' }).sort({ classId: 1 }).sort({ classTime1: 1 });

            const plansa = await Plan.find({ days: 'سه شنبه' }).sort({ classId: 1 }).sort({ classTime1: 1 });

            const planch = await Plan.find({ days: 'چهارشنبه' }).sort({ classId: 1 }).sort({ classTime1: 1 });

            const workbook = new ExcelJs.Workbook();
            const worksheet = workbook.addWorksheet('My Plans');
            

    /*TITLE*/

            worksheet.columns = [
                {header: 'ایام هفته', key: 'days', width: 12 },
                {header: 'نام کلاس', key: 'className', width: 20 },
                {header: 'ساعت شروع', key: 'timeStart', width: 14},
                {header: 'ساعت پایان', key: 'timeEnd' , width: 14},
                {header: 'نام استاد', key: 'teacherName', width: 20 },
                {header: 'نام درس', key: 'lessonName', width: 20},
            ]
            
            plansh.forEach(plan => {
                worksheet.addRow(plan);
            });


            worksheet.columns = [
                {key: 'days', width: 12, outlineLevel: 1 },
                {key: 'className', width: 15},
                {key: 'timeStart', width: 15},
                {key: 'timeEnd' , width: 15},
                {key: 'teacherName', width: 20 },
                {key: 'lessonName', width: 20},
            ]
            
            planyk.forEach(plan => {
                worksheet.addRow(plan);
            });

            worksheet.columns = [
                {key: 'days', width: 12, outlineLevel: 1 },
                {key: 'className', width: 15},
                {key: 'timeStart', width: 15},
                {key: 'timeEnd' , width: 15},
                {key: 'teacherName', width: 20 },
                {key: 'lessonName', width: 20},
            ]
            
            planyk.forEach(plan => {
                worksheet.addRow(plan);
            });
            

            worksheet.columns = [
                {key: 'days', width: 12, outlineLevel: 1 },
                {key: 'className', width: 15},
                {key: 'timeStart', width: 15},
                {key: 'timeEnd' , width: 15},
                {key: 'teacherName', width: 20 },
                {key: 'lessonName', width: 20},
            ]
            
            plando.forEach(plan => {
                worksheet.addRow(plan);
            });
            

            worksheet.columns = [
                {key: 'days', width: 12, outlineLevel: 1 },
                {key: 'className', width: 15},
                {key: 'timeStart', width: 15},
                {key: 'timeEnd' , width: 15},
                {key: 'teacherName', width: 20 },
                {key: 'lessonName', width: 20},
            ]
            
            plansa.forEach(plan => {
                worksheet.addRow(plan);
            });

            worksheet.columns = [
                {key: 'days', width: 12, outlineLevel: 1 },
                {key: 'className', width: 15},
                {key: 'timeStart', width: 15},
                {key: 'timeEnd' , width: 15},
                {key: 'teacherName', width: 20 },
                {key: 'lessonName', width: 20},
            ]
            
            planch.forEach(plan => {
                worksheet.addRow(plan);
            });


            worksheet.getRow(1).font = { name: 'Arial', family: 2, size: 15, bold: true };

            worksheet.getColumn(1).alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.getColumn(2).alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.getColumn(3).alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.getColumn(4).alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.getColumn(5).alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.getColumn(6).alignment = { vertical: 'middle', horizontal: 'center' };
            
            worksheet.getColumn(1).font = { name: 'Arial', family: 2, size: 15, bold: true };

        await workbook.xlsx.write(stream);
            
            
        } catch (err) {
            next(err)
        }
    }

    
}

module.exports = new reportingController();