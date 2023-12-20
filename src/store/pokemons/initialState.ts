import { IPokemonsInitialState } from "./types";

export const initialState: IPokemonsInitialState = {
  renderedPokemonsList: [],
  pokemons: {
    data: {
      limit: 10,
      count: 248,
      results: [],
      totalPages: 0,
      currentPage: 1,
      filters: {
        sortMethod: 'Lowest to Highest',
        type: 'dragon',
      }
    },
    error: null,
    loading: false,
  },
  pokemon: {
    data: null,
    error: null,
    loading: false,
  },
};
