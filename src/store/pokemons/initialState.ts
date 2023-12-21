import { IPokemonsInitialState } from "./types";

export const initialState: IPokemonsInitialState = {
  renderedPokemonsList: [],
  pokemons: {
    data: {
      count: 248,
      results: [],
      totalPages: 0,
      filters: {
        limit: 20,
        currentPage: 1,
        sortMethod: "A to Z",
        selectedType: "poison",
      },
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
