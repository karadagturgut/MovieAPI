var express = require('express');
var router = express.Router();

//Models
const MovieModel = require('../models/Movie')

router.get('/', (req, res, next) =>{
    res.json('respond with a resource');
  });

router.post('/', (req, res, next) =>{
   /*const {title,imdb_score,category,country,year} = req.body;
 
   const Movie=new MovieModel({
    title:title,
    imdb_score:imdb_score,
    category:category,
    country:country,
    year:year

  }); 
  
  Movie.save((err,data)=>{
    if(err)
    console.log("Something went wrong. Here is error:",err)
    
    res.json(data);

  })*/
  const Movie = new MovieModel(req.body);
  Movie.save((err,data)=>{
    if(err)
    console.log("Something went wrong. Here is error:",err)
    
    res.json(data);

  })
});

module.exports = router;
