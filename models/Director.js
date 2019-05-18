const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const DirectorSchema= new Schema({
    directors_id:Schema.Types.ObjectId,
    name:{type:String,required:true},
    surname: {type:String,required:true},
    nation:String,
    dated:{type:Date,default:Date.now}
    
})

module.exports=mongoose.model('director',DirectorSchema)