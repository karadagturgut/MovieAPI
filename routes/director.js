var express = require('express');
var router = express.Router();

//Models
const DirectorModel = require('../models/Director')

//GETs

// getall
router.get('/', (req, res, next) =>{
  const promise= DirectorModel.find({});
  promise.then((data)=>{
    res.json(data);
  }).catch((err)=>{
    res.json(err)
  })
  });

// top10
router.get('/top10', (req, res, next) =>{
  const promise= DirectorModel.find({}).limit(10).sort({imdb_score:1});
  promise.then((data)=>{
    res.json(data);
  }).catch((err)=>{
    res.json(err)
  })
  });

//findbyid
router.get('/:director_id', (req, res,next) => {
const promise = DirectorModel.findById(req.params.movie_id);

promise.then((movie)=>{
  if(!movie)
  next({message:'The director was not found' , code:1});
  res.json(movie);
}).catch((err)=>{
  res.json(err)
});
});

//DELETEs

//deletebyid
router.delete('/:director_id', (req, res,next) => {
const promise = DirectorModel.findByIdAndRemove(req.params.movie_id);
    
    promise.then((movie)=>{
      if(!movie)
      next({message:'The director was not found' , code:1});
  
      res.json({status:1});
    }).catch((err)=>{
      res.json(err)
    });
    });

    //POSTs

    
 // create new one   
router.post('/', (req, res, next) =>{
const Movie = new DirectorModel(req.body);
 const promise = Movie.save(); 

promise.then((data)=>{
res.json({status:1});
}).catch((err)=>{
  res.json(err)
}) 
  });

  //updatebyid
router.put('/:director_id', (req, res,next) => {
  const promise = DirectorModel.findByIdAndUpdate(req.params.movie_id,req.body,{new:true});
  
  promise.then((movie)=>{
    if(!movie)
    next({message:'The director was not found' , code:1});

    res.json(movie);
  }).catch((err)=>{
    res.json(err)
  });
  });


module.exports = router;
