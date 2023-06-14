const mongoose = require('mongoose');


const teacherAuth = mongoose.Schema({
    teacherName : { type : String , required : true},
    teacherCode  : { type : Number , unique : true , required : true},
    field : { type : String , required : true}
},{ timestamps : true });


module.exports = mongoose.model('teacherAuth' , teacherAuth);

