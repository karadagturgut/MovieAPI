var express = require('express');
var router = express.Router();

//Models
const MovieModel = require('../models/Movie')

router.get('/', (req, res, next) =>{
  const promise= MovieModel.find({});
  promise.then((data)=>{
    res.json(data);
  }).catch((err)=>{
    res.json(err)
  })
  });
router.get('/:movie_id', (req, res,next) => {
const promise = MovieModel.findById(req.params.movie_id);

promise.then((movie)=>{
  if(!movie)
  next({message:'The movie was not found' , code:1});
  res.json(movie);
}).catch((err)=>{
  res.json(err)
});
});

router.post('/', (req, res, next) =>{
const Movie = new MovieModel(req.body);
 const promise = Movie.save(); 

promise.then((data)=>{
res.json({status:1});
}).catch((err)=>{
  res.json(err)
}) 
  });

module.exports = router;
