const controller = require('app/http/controllers/controller');
const passport = require('passport');

class loginController extends controller {

    showLoginForm(req , res){
        res.render('./login');
    }

    async loginProccess(req, res, next) {
        try {
            let result = await this.validationData(req, res,next)
            if (result)
                return this.login(req, res, next);
    
                return this.back(req, res);
        } catch (err) {
            next(err)
        }
    };

    async login(req, res, next) {
        passport.authenticate('local.login',{
            successRedirect : '/admin' ,
            failureRedirect : '/',
            failureFlash: true,
        })(req, res, next);
    }
    
}

module.exports = new loginController();