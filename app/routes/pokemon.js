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

/**
 * Get All Pokemons
 * GET Request
 */

pokemonRouter.get('/',asyncErrorHandler(async (req, res, next) => {

    const pokemons =  await Pokemon.getAllPokemon();
    res.status(200).json(pokemons);

}));

/**
 * Get Pokemon By Name
 * GET Request
 */

pokemonRouter.get('/name/:name',asyncErrorHandler(async (req, res, next) => {
    
  let name = req.params.name;

    const pokemon =  await Pokemon.getPokemon(name);
    res.status(200).json(pokemon);

}));

/**
 * Compare List Of Pokemon
 * GET Request
 */

pokemonRouter.get('/compare',asyncErrorHandler(async (req, res, next) => {

  let pokemonList = req.body ? req.body.pokemonList : ['kakuna', 'ditto'] ;

  const mostPowerfulPokemon = await Pokemon.comparePokemons(pokemonList, res);
  res.status(200).json(`${mostPowerfulPokemon.pokemon} is the most powerful with ${mostPowerfulPokemon.moves} moves`);

}));


module.exports = pokemonRouter;