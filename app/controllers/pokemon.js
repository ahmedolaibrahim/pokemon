
/**
 * Module dependencies
 */

 import pokemonService from '../services/pokemon';
 import apiError from '../utils/middleware/apiError';
 import _ from 'lodash';

export default class Pokemon  {

  /**
   * return pokemon based on name param
   * @param  {String} name pokemon name
   * @return {Object} return object containing pokemon data
   */

  static async getPokemon(name) {
    const pokemon =  await pokemonService.getPokemon(name); 
    return pokemon.data;
  }

  /**
   * return all pokemons
   * @return {Array} return Array of all pokemons
   */

  static async getAllPokemon() {
    const pokemons =  await pokemonService.getAllPokemons(); 
    return pokemons.data.results;
  }

   /**
   * return all pokemons
   * @return {Array} return Array of all pokemons
   */

  static async getPokemonsFromList(list) {
    const pokemonList = await pokemonService.getPokemonsFromList(list);
    if (pokemonList.errors.length > 0) {
        throw new apiError(JSON.stringify(pokemonList.errors));
    } else {
       return pokemonList.pokemons;
    }
  }

   /**
   * Transforms pokemon array and return pokemon name and the number of moves
   * @return {Array} return Array of Object containing pokemon name and no of moves
   */

  static getPokemonMoves(pokemons) {
    let pokeMoves = pokemons.map((pokemon) => {
       return  { pokemon:pokemon.name, moves: pokemon.moves.length };
    });
    return pokeMoves;
  }

  
   /**
   * returns Pokemon with the highest number of moves
   * @return {Object} return Object containing pokemon name and moves
   */

  static async comparePokemons(pokemonList) {
  
    if (typeof pokemonList === 'undefined' || pokemonList.length < 1) {
        throw new apiError('Pokemon List is empty or Invalid');
    } 
    const getPokemons =  await this.getPokemonsFromList(pokemonList);
    
    let pokeMoves = this.getPokemonMoves(getPokemons);
    const powerfulPokemon =  _.reverse(_.sortBy(pokeMoves, pokemon => pokemon.moves))[0];
    return powerfulPokemon;
  }

 }