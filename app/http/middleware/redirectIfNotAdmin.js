const middleware = require('./middleware');

class redirectIfNotAdmin extends middleware {
    
    handle(req , res , next){
        if (req.isAuthenticated() && req.user.admin) {
            return next();

        }else if (req.isAuthenticated() && !req.user.admin) {
            return res.redirect('/teacher');
        } else {
            return res.redirect('/');
        }
    }

}

module.exports = new redirectIfNotAdmin();