const controller = require('app/http/controllers/controller');
const User = require('app/models/user');
const Term = require('app/models/term');


class adminController extends controller {
    async index(req, res , next) {
        try {
            res.render('./admin')
        } catch (err) {
            next(err)
        }
    }

    async showTermForm(req, res, next) {
        try {
            res.render('./admin/term')
        } catch (err) {
            next(err)
        }
    }

    async termProccess(req, res, next) {
        try {

            let result = await this.validationData(req , res)
            if (result) {
    
                const newTerm = new Term({
                    termYear: req.body.termYear,
                    termCode: req.body.termCode
                })
    
                await newTerm.save();
                req.flash('errors' , ' ترم مورد نظر شما ذخیره سازی شد ');
                return this.back(req,res);
            }
            return this.back(req, res);
             
        } catch (err) {
            next(err)
        }
    }

    async access(req, res) {
        try {
            let user = await User.find({});

            res.render('./admin/access' , { user })
        } catch (err) {
            next(err)
        }
    }

    async accessLevel(req, res, next) {
        try {
            this.isMongoId(req.params.id);

            let user = await User.findById(req.params.id);
            user.set({ admin: !user.admin });
            await user.save();

            return this.back(req, res);
        } catch (err) {
            next(err);
        }
    }

    async delete(req, res, next) {
        try {
            this.isMongoId(req.params.id);

            let user = await User.findById(req.params.id);

            await user.remove();

            return this.back(req, res);
        } catch (err) {
            next(err)
        }
    }

}

module.exports = new adminController();


