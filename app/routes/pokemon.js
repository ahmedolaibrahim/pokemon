/**
 * Module dependencies
 */
import { Router } from 'express';
import { asyncErrorHandler } from '../utils/middleware/errorHandler';
import Pokemon from '../controllers/pokemon';


/**
 * Module variables
 */
const pokemonRouter =  Router();

/**
 * Pokemon Routes 
 */

pokemonRouter.get('/',asyncErrorHandler(async (req, res, next) => {
    const pokemons =  await Pokemon.getAllPokemon();
    res.status(200).json({
      pokemons
    });
}));

pokemonRouter.get('/name/:name',asyncErrorHandler(async (req, res, next) => {
  let name = req.params.name;

  const pokemon =  await Pokemon.getPokemon(name);
    res.status(200).json({
      pokemon
    });
}));

pokemonRouter.get('/compare',asyncErrorHandler(async (req, res, next) => {
  res.send("compare list of pokemons");
}));


module.exports = pokemonRouter;