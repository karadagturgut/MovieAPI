const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema= new Schema({
    directors_id:Schema.Types.ObjectId,
    title:{type:String,required:true},
    category:String,
    country:String,
    year:Number,
    imdb_score:Number,
    dated:{type:Date,default:Date.now}
    
})

module.exports=mongoose.model('movie',MovieSchema)