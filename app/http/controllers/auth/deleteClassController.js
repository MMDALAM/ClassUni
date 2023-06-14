const controller = require('app/http/controllers/controller');
const Class = require('app/models/class');
const Plan = require('app/models/plan');


class deleteClassController extends controller  {
    async showDeleteClassForm(req , res){
        res.render('./auth/deleteClass'  , { errors : req.flash('errors')});
    }


    async deleteClassProccess(req , res , next) {
        let result = await this.validationData(req , res)
        if (result) {
             return this.detClass(req , res  , next)
              
        }
            return res.redirect('/auth/deleteClass')
    }


    async detClass(req , res , next){
        const deleteClass = await Class.findOne({ classId : req.body.classId });
        const deletePlan = await Plan.findOne({ classId : req.body.classId });

        if(!deleteClass && !deletePlan){
            req.flash('errors' , ' اطلاعات وجود ندارد ');
            return res.redirect('/auth/deleteClass');
        }else{
            if(deleteClass || deletePlan){
                await Class.findOneAndDelete({ classId : req.body.classId })
                await Plan.findOneAndDelete({ classId : req.body.classId })
            }else{
            await Class.findOneAndDelete({ classId : req.body.classId })
            }
            return res.redirect('/admin');
        }

    }
   
}

module.exports = new deleteClassController();
