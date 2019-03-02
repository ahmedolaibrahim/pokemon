/**
 * Module Dependencies
 */

import pokemonURL  from '../utils/axios';
import apiError from '../utils/middleware/apiError';


//Pokemon service class

export default class pokemonService {
  
  /**
   * fetch list of pokemons
   */

  static async getAllPokemons() {

   const pokemons = await pokemonURL.get('/?limit=950')
                            .catch((err) => {
                                throw new apiError(err);
                            });
   return pokemons;
  }

   /**
   * Retrieve pokemon by name
   */

  static async getPokemon(name) {
    const pokemon = await pokemonURL.get(`/${name}/`)
                            .catch((err) => {
                              throw new apiError(err);
                            });
    return pokemon;
  }
}