const mongoose= require('mongoose');

module.exports=()=>
{
mongoose.connect('mongodb://db_Admin:ab1234@ds245337.mlab.com:45337/heroku_4x6kh66f',{ useNewUrlParser: true })
 mongoose.connection.on('open',()=>{
     console.log('MongoDB Connection Established.')
 });
 mongoose.connection.on('error',(err)=>{
     console.log("there's a problem over here:",err);
 })
 mongoose.Promise=global.Promise;
}