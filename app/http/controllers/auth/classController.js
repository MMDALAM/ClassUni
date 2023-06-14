const controller = require('app/http/controllers/controller');
const Class = require('app/models/class');



class classController extends controller  {
    async showClassForm(req, res) {
        try {
            res.render('./auth/class');
        } catch (err) {
            next(err)
        }
    }

    async classProccess(req, res, next) {
        try {
            let result = await this.validationData(req, res);
            if (result) {
                return this.classSave(req, res, next);
            }
            return res.redirect('/auth/class');
        } catch (err) {
            next(err)
        }
    }

    async classSave(req , res){

        const newClass = new Class({
            classId:req.body.classId,
            className:req.body.className,
            type:req.body.type,
            days:req.body.days,
        });

        try{
             await newClass.save()
            }catch(err){     
                 if ( err.code == 11000 ) {
        req.flash('errors', ' کلاس مورد نظر شما قبلا ساخته شده است ');
        return res.redirect('/auth/class');
            }
        }
        req.flash('errors', ' کلاس مورد نظر شما ساخته شد ');
        res.redirect('/auth/class')
    }
    
    
}

module.exports = new classController();