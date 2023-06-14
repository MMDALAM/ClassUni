const mongoose = require('mongoose');


const field = mongoose.Schema({
    fieldName : { type : String , required : true},
    fieldCode : { type : Number , required : true},
},{ timestamps : true });


module.exports = mongoose.model('Field' , field);

