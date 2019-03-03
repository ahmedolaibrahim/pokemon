import { pokemonList } from '../../../tests/pokemon/testData'
export default class {

  static async getAllPokemons() {
    return {
      data: {
       results: [
          {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon/1/"
          },
          {
          name: "ivysaur",
          url: "https://pokeapi.co/api/v2/pokemon/2/"
          },
          {
          name: "venusaur",
          url: "https://pokeapi.co/api/v2/pokemon/3/"
          },
          {
          name: "charmander",
          url: "https://pokeapi.co/api/v2/pokemon/4/"
          },
       ]
      }
     }
   }


  static async getPokemon(name) {
    return { 
      data: {
        name: `${name}`,
        abilities: [
          {
          ability: {
          name: "shed-skin",
          url: "https://pokeapi.co/api/v2/ability/61/"
          },
          is_hidden: false,
          slot: 1
          }
        ]
      }
    }
  }

  static async getPokemonsFromList(list) {
   const validPokemonList = ['ditto', 'kukuna', 'metapod'];

   let 
     pokemons = [],
     errors = [];

   list.forEach((pokemon) => {
     if (validPokemonList.indexOf(pokemon) === -1) {
       errors.push( {pokemon: `${pokemon}`, err:"Not Found!"})
     } else {
       pokemons = pokemonList;
     }
    });

    return { pokemons, errors };
  }
}