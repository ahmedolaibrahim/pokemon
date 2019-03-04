const pokemons = [
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
];

const pokemon = {
  name: "metapod",
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
};

const pokemonList = [
  {
    name: "ditto",
    abilities: [
      {
      ability: {
      name: "shed-skin",
      url: "https://pokeapi.co/api/v2/ability/61/"
      },
      is_hidden: false,
      slot: 1
      }
    ],
    moves: [
      {
        move: {
        name: "transform",
        url: "https://pokeapi.co/api/v2/move/144/"
        },
      }
    ]
  },
  {
    name: "kukuna",
    abilities: [
      {
      ability: {
      name: "shed-skin",
      url: "https://pokeapi.co/api/v2/ability/61/"
      },
      is_hidden: false,
      slot: 1
      }
    ],
    moves: [
      {
        move: {
        name: "transform",
        url: "https://pokeapi.co/api/v2/move/144/"
        },
      },
      {
        move: {
          name: "iron-defense",
          url: "https://pokeapi.co/api/v2/move/334/"
        },
      }
    ]
  },
  {
    name: "metapod",
    abilities: [
      {
      ability: {
      name: "shed-skin",
      url: "https://pokeapi.co/api/v2/ability/61/"
      },
      is_hidden: false,
      slot: 1
      }
    ],
    moves: [
      {
        move: {
        name: "transform",
        url: "https://pokeapi.co/api/v2/move/144/"
        }
      },
      {
        move: {
          name: "string-shot",
          url: "https://pokeapi.co/api/v2/move/81/"
        },
      },
      {
        move: {
          name: "harden",
          url: "https://pokeapi.co/api/v2/move/106/"
        },
      }
    ]
  }
];


const pokemonListError = [{"pokemon":"kuku","err":"Not Found!"}];

module.exports = {
  pokemon,
  pokemons,
  pokemonList,
  pokemonListError
};