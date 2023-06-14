const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plans = Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    class: { type : Schema.Types.ObjectId, ref:'Class' },
    type : { type : String , required : true},
    classId  : { type : String, required : true },
    className  : { type : String , required : true},
    days  : { type : String , required : true},
    classTime1 : { type: Number ,  required : true},
    classTime2 : { type: Number , required : true},
    lessonName : { type : String , required : true},
    teacherName : { type : String , required : true},
    field : { type : String , required : true},
    termCode: { type: Number, required: true },
    timeStart: { type: String, required: true },
    timeEnd: { type : String , required : true}
},{ timestamps : true });



module.exports = mongoose.model('Plan' , plans);

