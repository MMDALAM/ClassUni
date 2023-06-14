const mongoose = require('mongoose');


const term = mongoose.Schema({
    termYear : { type : Number , required : true},
    termCode : { type : Number , required : true},
},{ timestamps : true });


module.exports = mongoose.model('Term' , term);

