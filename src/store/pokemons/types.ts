import { IPokemon } from "../../components/Card/types";

export interface IPokemonsInitialState {
  renderedPokemonsList: IPokemon[] | [];
  pokemons: {
    data: {
      count: number;
      limit: number;
      totalPages: number;
      currentPage: number;
      results: IPokemon[] | [];
      filters: {
        sortMethod: string;
        type: string;
      }
    };
    loading: boolean;
    error: null | string;
  };
  pokemon: {
    loading: boolean;
    error: null | string;
    data: IPokemon | null;
  };
}
