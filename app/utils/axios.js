import axios from 'axios';

// Set config defaults when creating the instance
const pokemonURL = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  timeout: 5000
});

module.exports = pokemonURL;
