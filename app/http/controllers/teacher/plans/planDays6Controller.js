const controller = require('app/http/controllers/controller');
const Plan = require('app/models/plan');
const Class = require('app/models/class');
const TeacherAuth = require('app/models/teacherAuth');
const Lesson = require('app/models/lesson');
const Term = require('app/models/term');
const Field = require('app/models/field');

class planDays6Controller extends controller  {
    async showPlanDays6Form(req , res){
        const teachersAuth = await this.Teachers();
        const lessonses = await this.Lessons();
        const className = await this.Classes();
        const terms = await this.terms();
        const fields = await this.fields();

        res.render('./teacher/plan/planDays6' , {teachersAuth , lessonses , className , terms ,fields});
    }

    async planDays6Proccess(req , res , next) {
        let result = await this.validationData(req , res)
        if (result) {
            return this.plan(req , res  , next)
        }
        return this.back(req, res);
    }

    async Teachers(req , res){
        const Teachers = await TeacherAuth.find()

        const teacherName = [];
        Teachers.forEach((el) =>{
            teacherName.push(el.teacherName);
        })
        return teacherName;
    }

    async Lessons(req, res, next) {
        try {
            const Lessons = await Lesson.find()

            const LessonName = [];
            Lessons.forEach((el) =>{
                LessonName.push(el.lessonName);
            })
            return LessonName;
        } catch (err) {
            next(err)
        }
        
    }

    async Classes(req , res){
        const classes = await Class.find({ Reserve: false , days : "پنج شنبه" })

        const className = [];
        classes.forEach((el) =>{
            className.push(el.classId);
        })
        return className;
    }

    async terms(req , res){
        const terms = await Term.find()

        const termCode = [];
        terms.forEach((el) =>{
            termCode.push(el.termCode);
        })
        return termCode;
    }

    async fields(req , res){
        const fields = await Field.find()

        const fieldName = [];
        fields.forEach((el) =>{
            fieldName.push(el.fieldName);
        })
        return fieldName;
    }

    async plan(req , res , next){

        const currentClass = await Class.findOne({ classId : req.body.classId  , days : req.body.days });

        if(!currentClass){
            req.flash('errors' , ' اطلاعات کد کلاس 1 وجود ندارد ');
            return this.back(req, res);
        }
        
        const newPlan = new Plan({
            // Class Document
            classId: currentClass.classId,
            className: currentClass.className,
            days: currentClass.days,
            type: currentClass.type,
            classTime1: currentClass.classTime1,
            classTime2: currentClass.classTime2,
            // Plan Document
            field:req.body.field,
            lessonName:req.body.lessonName,
            teacherName :req.body.teacherName,
            termCode:req.body.termCode,
        });

        try{
            await newPlan.save()
            currentClass.Reserve = true;
            await currentClass.save();
            req.flash('errors', 'کد کلاس 1 مورد نظر شما رزرو شد ');
            }catch(err){     
            if ( err.code == 11000 ) {
            req.flash('errors', ' کد کلاس 1 مورد نظر شما قبلا رزرو شده است  ');
            return this.back(req, res);
        }}



        const currentClass2 = await Class.findOne({ classId : req.body.classId2 , days : req.body.days});
        if (req.body.classId2){
            if(currentClass2 === null){
                req.flash('errors' , ' اطلاعات کد کلاس 2 وجود ندارد ');
                return this.back(req, res);
            }else if (currentClass2){
                const newPlantwo = new Plan({
                    // Class Document
                    classId: currentClass2.classId,
                    className: currentClass2.className,
                    days: currentClass2.days,
                    type: currentClass2.type,
                    classTime1: currentClass2.classTime1,
                    classTime2: currentClass2.classTime2,
                    // Plan Document
                    field:req.body.field,
                    lessonName:req.body.lessonName,
                    teacherName :req.body.teacherName,
                    termCode:req.body.termCode,
                }); 
    
                try{
                    await newPlantwo.save();
                    currentClass2.Reserve = true;
                    await currentClass2.save();
                    req.flash('errors', 'کد کلاس 2 مورد نظر شما رزرو شد ');
                }catch(err){     
                if ( err.code == 11000 ) {
                req.flash('errors', ' کد کلاس 2 مورد نظر شما قبلا رزرو شده است ');
                return this.back(req, res);
            }}
            }}

        req.flash('errors', 'تمام کلاس های مورد نظر شما رزرو شد ');
        return this.back(req, res);

    }
}

module.exports = new planDays6Controller();