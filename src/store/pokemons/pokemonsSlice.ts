import { fetchPokemonsList } from "./thunks";
import { initialState } from "./initialState";
import { IPokemonsInitialState } from "./types";
import { IPokemon } from "../../components/Card/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: initialState,
  reducers: {
    setPokemon(state: IPokemonsInitialState, action: PayloadAction<IPokemon>) {
      state.pokemon.data = action.payload;
    },
    setPokemonsList(state: IPokemonsInitialState, action: PayloadAction<IPokemon[]>) {
      state.pokemons.data.results = action.payload;
    },
    setSortMethod: (state, action: PayloadAction<string>) => {
      state.pokemons.data.filters.sortMethod = action.payload;
    },
    setType: (state, action: PayloadAction<string>) => {
      state.pokemons.data.filters.type = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.pokemons.data.currentPage = action.payload;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.pokemons.data.limit = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonsList.pending, (state) => {
        state.pokemons.loading = true;
        state.pokemons.error = null;
      })
      .addCase(fetchPokemonsList.fulfilled, (state, action: any) => {
        state.pokemons.loading = false;
        state.pokemons.data.count = action.payload.count;
        state.pokemons.data.results = action.payload.results;
        state.pokemons.data.totalPages = Math.ceil(
          action.payload.count / action.payload.results.length
        );
      })
      .addCase(
        fetchPokemonsList.rejected,
        (state, action: PayloadAction<any>) => {
          state.pokemons.loading = false;
          state.pokemons.error = action.payload;
        }
      );
  },
});

export const { setPokemon, setPokemonsList, setType, setSortMethod } = pokemonsSlice.actions;
