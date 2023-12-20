import { RootState } from "..";
import { createSelector } from "reselect";
import { IPokemonsInitialState } from "./types";

const pokemonsSelector = (state: RootState) => state.pokemons;

const pokemonsListSelector = createSelector(
  [pokemonsSelector],
  (pokemons: IPokemonsInitialState) => pokemons.pokemons.data.results
);

const renderedPokemonsListSelector = createSelector(
  [pokemonsSelector],
  (pokemons: IPokemonsInitialState) => pokemons.renderedPokemonsList
);

const pokemonsCurrentPageSelector = createSelector(
  [pokemonsSelector],
  (pokemons: IPokemonsInitialState) => pokemons.pokemons.data.currentPage
);

const pokemonsTypeSelector = createSelector(
  [pokemonsSelector],
  (pokemons: IPokemonsInitialState) => pokemons.pokemons.data.filters.type
);

const pokemonsLimitSelector = createSelector(
  [pokemonsSelector],
  (pokemons: IPokemonsInitialState) => pokemons.pokemons.data.limit
);

const pokemonsCountSelector = createSelector(
  [pokemonsSelector],
  (pokemons: IPokemonsInitialState) => pokemons.pokemons.data.count
);

const pokemonSelector = createSelector(
  [pokemonsSelector],
  (pokemons: IPokemonsInitialState) => pokemons.pokemon
);

export const pokemonsSel = {
  pokemonsSelector,
  pokemonsLimitSelector,
  pokemonsCountSelector,
  pokemonsTypeSelector,
  pokemonsCurrentPageSelector,
  renderedPokemonsListSelector,
  pokemonsListSelector,
  pokemonSelector,
};
