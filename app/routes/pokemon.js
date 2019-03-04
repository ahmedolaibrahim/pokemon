/**
 * Module dependencies
 */
import { Router } from 'express';
import { asyncErrorHandler } from '../utils/middleware/errorHandler';
import Pokemon from '../controllers/pokemon';
import cache from 'express-redis-cache';
import config from '../../config/keys';

/**
 * Module variables
 */
const 
   appCache = cache({
      host: config.redis.host, 
      port: config.redis.port
   }),
   pokemonRouter =  Router();

/**
 * Pokemon Routes 
 */

/**
 * Get All Pokemons
 * GET Request
 */

pokemonRouter.get('/', appCache.route({ expire: 30  }), asyncErrorHandler(async (req, res, next) => {
    const pokemons =  await Pokemon.getAllPokemon();
    res.status(200).json(pokemons);
    res.end();
}));

/**
 * Get Pokemon By Name
 * GET Request
 */

pokemonRouter.get('/name/:name',appCache.route({ expire: 30  }),asyncErrorHandler(async (req, res, next) => {
    
  let name = req.params.name;

    const pokemon =  await Pokemon.getPokemon(name);
    res.status(200).json(pokemon);

}));

/**
 * Compare List Of Pokemon
 * POST Request
 */

pokemonRouter.post('/compare',asyncErrorHandler(async (req, res, next) => {

  let pokemonList = req.body.pokemonList;
  const mostPowerfulPokemon = await Pokemon.comparePokemons(pokemonList, res);
  res.status(200).json(`${mostPowerfulPokemon.pokemon} is the most powerful with ${mostPowerfulPokemon.moves} moves`);

}));


module.exports = pokemonRouter;