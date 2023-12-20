import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPokemon } from "../../components/Card/types";

export const fetchPokemonsList = createAsyncThunk(
  "pokemon/fetchList",
  async (type:string) => {
    if (type === "All Types") {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        const count = response.data.count;
        const results = await Promise.all(
          response.data.results.map(
            async (pokemon: { name: string; url: string }) => {
              const currPokemon = await axios.get(pokemon.url);
              return {
                ...currPokemon.data,
              };
            }
          )
        );
        return { results, count };
      } catch (error) {
        console.error("Error fetching Pokemon list:", error);
        throw error;
      }
    } else {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
        const count = response.data.pokemon.length;
        const results = await Promise.all(
          response.data.pokemon.map(
            async (item: {
              pokemon: { name: string; url: string };
              slot: number;
            }) => {
              const currPokemon = await axios.get(item.pokemon.url);
              return {
                ...currPokemon.data,
              };
            }
          )
        );
        return { results, count };
      } catch (error) {
        console.error("Error fetching Pokemon list:", error);
        throw error;
      }
    }
  }
);
