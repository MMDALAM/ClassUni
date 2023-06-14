const controller = require('app/http/controllers/controller');
const Class = require('app/models/class');

class classesController extends controller  {
    async showClass1Form(req, res,next) {
        try {
            let classes = await Class.find({ days : 'شنبه' }).sort({ classId: 1 });
            res.render('./teacher/classes/classes1', {classes});
        } catch (err) {
            next(err)
        }
    }

    async showClass2Form(req, res,next) {
        try {
            let classes = await Class.find({ days : 'یک شنبه' }).sort({ createdAt: 1 });
            res.render('./teacher/classes/classes2', { classes});
        } catch (err) {
            next(err)
        }
    }
    
    async showClass3Form(req, res,next) {
        try {
            let classes = await Class.find({ days : 'دوشنبه' }).sort({ createdAt: 1 });
            res.render('./teacher/classes/classes3', { classes});
        } catch (err) {
            next(err)
        }
    }

    async showClass4Form(req, res,next) {
        try {
            let classes = await Class.find({ days : 'سه شنبه' }).sort({ createdAt: 1 });
            res.render('./teacher/classes/classes4', { classes});
        } catch (err) {
            next(err)
        }
    }

    async showClass5Form(req, res,next) {
        try {
            let classes = await Class.find({ days : 'چهارشنبه' }).sort({ createdAt: 1 });
            res.render('./teacher/classes/classes5', { classes});
        } catch (err) {
            next(err)
        }
    }
    
}

module.exports = new classesController();