/**
 * Module Dependencies
 */

import pokemonURL  from '../utils/axios';
import apiError from '../utils/middleware/apiError';
import axios from 'axios';


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

  /**
   * Retrieve pokemon from list params
   */

  static async getPokemonsFromList(list) {
    let 
      pokemons = [],
      errors = [];
    
    await Promise.all(
      list.map(async(url) => {
        try {
              let pokemonData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${url}/`);
              pokemons.push(pokemonData.data);
        } catch (err) {
              console.log(`Pokemon with name ${url} not found!`);
              errors.push({pokemon: `${url}`, err: `${err.response.data}`});
        }
      }));
   
   return { pokemons, errors };
  }
}