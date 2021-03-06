var express = require('express');
var router = express.Router();

//Models
const MovieModel = require('../models/Movie')

// getall
router.get('/', (req, res, next) =>{
  const promise= MovieModel.find({});
  promise.then((data)=>{
    res.json(data);
  }).catch((err)=>{
    res.json(err)
  })
  });

// top10
router.get('/top10', (req, res, next) =>{
  const promise= MovieModel.find({}).limit(10).sort({imdb_score:1});
  promise.then((data)=>{
    res.json(data);
  }).catch((err)=>{
    res.json(err)
  })
  });

//findbyid
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



//deletebyid
router.delete('/:movie_id', (req, res,next) => {
const promise = MovieModel.findByIdAndRemove(req.params.movie_id);
    
    promise.then((movie)=>{
      if(!movie)
      next({message:'The movie was not found' , code:1});
  
      res.json({status:1});
    }).catch((err)=>{
      res.json(err)
    });
    });

    
 // create new one   
router.post('/', (req, res, next) =>{
const Movie = new MovieModel(req.body);
 const promise = Movie.save(); 

promise.then((data)=>{
res.json({status:1});
}).catch((err)=>{
  res.json(err)
}) 
  });

  //updatebyid
router.put('/:movie_id', (req, res,next) => {
  const promise = MovieModel.findByIdAndUpdate(req.params.movie_id,req.body,{new:true});
  
  promise.then((movie)=>{
    if(!movie)
    next({message:'The movie was not found' , code:1});

    res.json(movie);
  }).catch((err)=>{
    res.json(err)
  });
  });


module.exports = router;
