
/**
 * Module dependencies
 */

 import pokemonService from '../services/pokemon';


export default class Pokemon  {

  /**
   * return pokemon based on name param
   * @param  {String} name pokemon name
   * @return {Object} return object containing pokemon data
   */

  static async getPokemonByName() {

  }

  /**
   * return all pokemons
   * @return {Array} return Array of all pokemons
   */

  static async getAllPokemon() {
    const pokemons =  await pokemonService.getAllPokemons(); 
    return pokemons.data.results;
  }

  static async comparePokemons() {

  }

 }