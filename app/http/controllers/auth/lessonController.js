const controller = require('app/http/controllers/controller');
const Lesson = require('app/models/lesson');


class lessonController extends controller  {
    showLessonForm(req , res){
        res.render('./auth/lesson' , {errors : req.flash('errors')});
    }

    async lessonProccess(req , res , next) {
        let result = await this.validationData(req , res)
        if (result) {
            return this.Lesson(req , res  , next)
        }
            return res.redirect('/auth/lesson')
    }


    async Lesson(req , res , next){
        
        const newLesson = new Lesson({
            lessonName:req.body.lessonName,
            lessonCode:req.body.lessonCode,
            field:req.body.field,
            unit: req.body.unit,
            clock: req.body.clock,
        });
    
        try {
            await newLesson.save();
        } catch (err) {
            if(err.code == 11000)
            {
                req.flash('errors' , 'این کد درس قبلا استفاده شده است')
                return res.redirect('/auth/lesson')
            }
            
        }


        res.redirect('/admin')

    }
    
    
}

module.exports = new lessonController();