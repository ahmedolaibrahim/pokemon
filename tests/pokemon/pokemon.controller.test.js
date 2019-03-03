
jest.mock('../../app/services/pokemon');
import Pokemon from '../../app/controllers/pokemon';
import { pokemons, pokemon, pokemonList, pokemonListError } from './testData';





describe('Pokemon Controller Test', () => {

  test('Should fetch pokemons', async() => {
     const allPokemons = await Pokemon.getAllPokemon();
      expect(allPokemons).toEqual(pokemons);
  });

  test('Should pokemon by name', async() => {
     const getPokemon = await Pokemon.getPokemon("metapod");
     expect(getPokemon).toEqual(pokemon);
  });


  test('Should fetch pokemons from list of pokemon names', async() => {
     const list = ['ditto', 'kukuna', "metapod"]
     const pokeList = await Pokemon.getPokemonsFromList(list);
     expect(pokeList).toEqual(pokemonList);
  });

  test('Should fetch return error when list contains an invalid pokemon name', async() => {
    const list = ['ditto', 'kuku', "metapod"]
    await Pokemon.getPokemonsFromList(list)
            .catch((error) => {
              expect(error).toEqual(new Error(JSON.stringify(pokemonListError)));
            });
  });

  test('Should compare pokemons and return the most powerful', async() => {
    const comparePokemon = await Pokemon.comparePokemons(["ditto","kukuna", "metapod"]);
    expect(comparePokemon).toEqual({pokemon:"metapod", moves: 3});
  });

  test('Should return error if invalid input is passed', async() => {
   await Pokemon.comparePokemons([])
            .catch((error) => {
              expect(error).toEqual(new Error("Pokemon List is empty or Invalid"));
            });
  });

  test('Should return error if one of the input is not found', async() => {
    await Pokemon.comparePokemons(["ditto","kuku", "metapod"])
             .catch((error) => {
               expect(error).toEqual(new Error(JSON.stringify(pokemonListError)));
             });
    });

});