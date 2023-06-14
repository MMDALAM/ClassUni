const controller = require('app/http/controllers/controller');
const Class = require('app/models/class');
const Plan = require('app/models/plan');


class deletePlanController extends controller  {
    async showDeletePlanForm(req , res){
        res.render('./auth/deleteClass'  , { errors : req.flash('errors')});
    }


    async deletePlanProccess(req , res , next) {
        let result = await this.validationData(req , res)
        if (result) {
             return this.detPlan(req , res  , next)
              
        }
            return res.redirect('/auth/deletePlan')
    }


    async detPlan(req , res , next){
        const deletePlan = await Plan.findOne({ classId : req.body.classId });
        
        if(!deletePlan){
            req.flash('errors' , ' اطلاعات وجود ندارد ');
            return res.redirect('/auth/deleteClass');
        }else if (deletePlan){
            const deleteReserve = deletePlan.classId;
            await Class.findOneAndUpdate({ classId : deleteReserve } , {$set : { Reserve : false }})
            await Plan.findOneAndDelete({ classId : req.body.classId })
        }
        return res.redirect('/admin');



    }
   
}

module.exports = new deletePlanController();
