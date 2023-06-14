const mongoose = require('mongoose');

const classes = mongoose.Schema({
    classId  : { type : String , required : true},
    className: { type : String , required : true},
    type : { type : String , required : true},
    days  : { type : String , required : true},
    Reserve : {type : Boolean , default : 0}
}, { timestamps: true });

classes.methods.path = function () {
    return `/classes/${this.className}`
}

module.exports = mongoose.model('Class' , classes);
