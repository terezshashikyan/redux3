import { IPokemon } from "../../components/Card/types";

export interface IPokemonsInitialState {
  renderedPokemonsList: IPokemon[] | [];
  pokemons: {
    data: {
      count: number;
      totalPages: number;
      results: IPokemon[] | [];
      filters: {
        limit: number;
        sortMethod: string;
        currentPage: number;
        searchInput: string;
        selectedType: string;
      };
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
