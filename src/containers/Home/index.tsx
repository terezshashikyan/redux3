import { useEffect } from "react";
import { AppDispatch } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { Card, Heading, Pagination } from "../../components";
import { pokemonsSel, pokemonsOp } from "../../store/pokemons";
import { fetchPokemonsList } from "../../store/pokemons/thunks";

import styles from "./Home.module.scss";
import DropDown from "../../components/DropDown ";
import { IPokemon } from "../../components/Card/types";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  const type = useSelector(pokemonsSel.pokemonsTypeSelector);
  const count = useSelector(pokemonsSel.pokemonsCountSelector);
  const limit = useSelector(pokemonsSel.pokemonsLimitSelector);
  const pokemonsList = useSelector(pokemonsSel.pokemonsListSelector);
  const currentPage = useSelector(pokemonsSel.pokemonsCurrentPageSelector);

  useEffect(() => {
    dispatch(fetchPokemonsList(type));
  }, [type]);

  const handleSortMethodClick = (pokemonsList: IPokemon[], option: string) => {
    dispatch(pokemonsOp.sortPokemonsList(pokemonsList, option));
  };

  const handleTypeClick = (pokemonsList: IPokemon[], option: string) => {
    dispatch(pokemonsOp.setType(option));
  };

  const handlePageClick = (page: number) => {
    dispatch(pokemonsOp.setCurrentPage(page));
  };

  const pokemonsListRenderer = pokemonsList
    .slice(0, 5)
    .map((pokemon) => <Card pokemon={pokemon} key={pokemon.id} />);

  return (
    <section className={styles.wrapper}>
      <DropDown
        options={[
          "A to Z",
          "Z to A",
          "Lowest to Highest",
          "Highest to Lowest",
        ]}
        handleClick={handleSortMethodClick}
      />
      <DropDown
        options={[
          "All Types",
          "fighting",
          "poison",
          "rock",
          "ghost",
          "fire",
          "grass",
          "psychic",
          "dragon",
          "fairy",
          "normal",
          "flying",
          "ground",
          "bug",
          "steel",
          "water",
          "electric",
          "ice",
          "dark",
          "shadow",
        ]}
        handleClick={handleTypeClick}
      />
      <Heading children="Pokédex" />
      <div className={styles.pokemonsList}>{pokemonsListRenderer}</div>
      <Pagination
        totalItems={count}
        itemsPerPage={limit}
        currentPage={currentPage}
        onPageChange={handlePageClick}
      />
    </section>
  );
};

export default Home;
