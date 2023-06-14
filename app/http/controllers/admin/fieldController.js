const controller = require('app/http/controllers/controller');
const Field = require('app/models/field');

class fieldController extends controller  {
    async showFieldForm(req, res) {
        try {
            res.render('./admin/field');
        } catch (err) {
            next(err)
        }
    }

    async fieldProccess(req, res, next) {
        try {
            let result = await this.validationData(req , res)
            if (result) {
                return this.field(req , res  , next)
            }
            return this.back(req, res);
        } catch (err) {
            next(err)
        }
    }

    async field(req, res, next) {
        try {  
        const newField = new Field({
            fieldName:req.body.fieldName,
            fieldCode:req.body.fieldCode,
        });
    
        try {
            await newField.save();
            req.flash('errors', ' رشته مورد نظر شما ذخیره سازی شد ');
            return this.back(req, res);
        } catch (err) {
            next(err);
        }


        res.redirect('/admin')

        } catch (err) {
            next(err)
        }
    }
    
}

module.exports = new fieldController();