const controller = require('app/http/controllers/controller')

class teacherController extends controller  {
    async index(req, res) {
        try {
            res.render('./teacher');
        } catch (err) {
            next(err)
        }
    }
    
}

module.exports = new teacherController();
