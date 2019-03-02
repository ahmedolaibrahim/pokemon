/**
 * Module dependencies
 */
import { Router } from 'express';
import { asyncErrorHandler } from '../utils/middleware/errorHandler';

/**
 * Module variables
 */
const pokemonRouter =  Router();

/**
 * Pokemon Routes 
 */
pokemonRouter.get('/',asyncErrorHandler(async (req, res, next) => {
    res.send("returns list of all pokemons");
}));

pokemonRouter.get('/name/:name',asyncErrorHandler(async (req, res, next) => {
  res.send("get pokemon by name");
}));

pokemonRouter.get('/compare',asyncErrorHandler(async (req, res, next) => {
  res.send("compare list of pokemons");
}));


module.exports = pokemonRouter;