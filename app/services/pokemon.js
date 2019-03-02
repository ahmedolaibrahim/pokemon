import pokemonURL  from '../utils/axios';
import apiError from '../utils/middleware/apiError';

export default class pokemonService {
  static async getAllPokemons() {

   const pokemons = await pokemonURL.get('/?limit=950')
                            .catch((err) => {
                                throw new apiError(err);
                            });
   return pokemons;
  }
}