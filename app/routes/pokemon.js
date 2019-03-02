import { Router } from 'express';

const pokemonRouter =  Router();

pokemonRouter.route('/')
  .get(function(req,res){
    res.send("pokemon route goes here");
  });


module.exports = pokemonRouter;