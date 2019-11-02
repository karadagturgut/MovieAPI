const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
username:{type:String,unique:true,required:true},
password:{type:String,minlength:8}

});

module.exports=mongoose.model('user',UserSchema);