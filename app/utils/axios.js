import axios from 'axios';
import https from 'https';



const httpsAgent = new https.Agent({ keepAlive: true, maxSockets: 5000, keepAliveMsecs: 3000000 });



// Set config defaults when creating the instance
const pokemonURL = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  httpsAgent
});

module.exports = pokemonURL;
