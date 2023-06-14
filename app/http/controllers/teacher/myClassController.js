const controller = require('app/http/controllers/controller');
const Class = require('app/models/class');
const Plan = require('app/models/plan');
const TeacherAuth = require('app/models/teacherAuth');
const Lesson = require('app/models/lesson');
const Term = require('app/models/term');
const Field = require('app/models/field');

class myClassController extends controller  {
    
    async myClass(req, res,next) {
        try {
            const plans = await Plan.find({ user: req.user.id })
                .populate({
                    path: 'user',
                    select: 'name',
                    // select: 'name'
                }).sort({ createdAt : 1 })

            res.render('./teacher/myClass' , { plans });
        } catch (err) {
            next(err)
        }    
    }

    async deletePlan(req, res, next) {
        try {
            this.isMongoId(req.params.id);

            const plan = await Plan.findById(req.params.id);

            plan.remove();

            return this.back(req, res);
        } catch (err) {
            next(err)
        }
    }

    async editPlan(req, res, next) {
        try {
            this.isMongoId(req.params.id);

            const plans = await Plan.findOne({ _id: req.params.id });
            const singleClass = await Class.findOne({ class: plans.class });

            const lessonses = await this.Lessons();
            const terms = await this.terms();
            const fields = await this.fields();
            const teachersAuth = await this.Teachers();
            
            return res.render('teacher/editPlan', { plans, lessonses, terms, fields, teachersAuth , singleClass});
            
        } catch (err) {
            next(err)
        }
    }

    async Teachers(req, res) {
        const Teachers = await TeacherAuth.find()

        const teacherName = [];
        Teachers.forEach((el) => {
            teacherName.push(el.teacherName);
        })
        return teacherName;
    }

    async Lessons(req, res, next) {
        try {
            const Lessons = await Lesson.find()

            const LessonName = [];
            Lessons.forEach((el) => {
                LessonName.push(el.lessonName);
            })
            return LessonName;
        } catch (err) {
            next(err)
        }
        
    }

    async terms(req, res) {
        const terms = await Term.find()

        const termCode = [];
        terms.forEach((el) => {
            termCode.push(el.termCode);
        })
        return termCode;
    }

    async fields(req, res) {
        const fields = await Field.find()

        const fieldName = [];
        fields.forEach((el) => {
            fieldName.push(el.fieldName);
        })
        return fieldName;
    }
}

module.exports = new myClassController();