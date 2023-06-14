const controller = require('app/http/controllers/controller');
const TeacherAuth = require('app/models/teacherAuth');


class teacherAuthController extends controller  {
    async showteacherAuthForm(req , res){
        const newTeacherCode = await this.codeTeacher();
        res.render('./auth/teacherAuth' , {newTeacherCode });
    }

    async teacherAuthProccess(req , res , next) {
        let result = await this.validationData(req , res)
        if (result) {
            return this.Teacher(req , res  , next)
        }
            return res.redirect('/auth/teacherAuth')
    }

    async codeTeacher(req , res){
        const TeacherAuths = await TeacherAuth.find()

        const teachers = []
        TeacherAuths.forEach(el => {
            teachers.push(el.teacherCode)
        });

        let newTeacherCode;

        if(teachers.length > 0){
            newTeacherCode = Math.max(...teachers) + 1 
        }else{
            newTeacherCode = 1
        }

        return newTeacherCode;
    }


    async Teacher(req , res , next){
        const newTeacherAuth = new TeacherAuth({
            teacherName:req.body.teacherName,
            teacherCode:req.body.teacherCode,
            field :req.body.field
        });
        

            await newTeacherAuth.save();

        res.redirect('/admin')

    }
    
    
}

module.exports = new teacherAuthController();