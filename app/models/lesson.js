const mongoose = require('mongoose');


const lesson = mongoose.Schema({
    lessonName : { type : String , required : true},
    lessonCode  : { type : String , unique : true, required : true},
    field : { type : String , required : true},
    unit : { type : String , required : true},
    clock : { type : Number , default : 0 }
},{ timestamps : true });


module.exports = mongoose.model('Lesson' , lesson);

