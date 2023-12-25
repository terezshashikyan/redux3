import { useEffect } from "react";
import { AppDispatch } from "../../store";
import DropDown from "../../components/DropDown ";
import { IPokemon } from "../../components/Card/types";
import { useDispatch, useSelector } from "react-redux";
import { Card, Heading, Pagination, SearchInput } from "../../components";
import { pokemonsSel, pokemonsOp } from "../../store/pokemons";
import { fetchPokemonsList } from "../../store/pokemons/thunks";

import styles from "./Home.module.scss";
import { useParams } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const limit = useSelector(pokemonsSel.pokemonsLimitSelector);
  const count = useSelector(pokemonsSel.pokemonsCountSelector);
  const pokemonsList = useSelector(pokemonsSel.pokemonsListSelector);
  const selectedType = useSelector(pokemonsSel.pokemonsTypeSelector);
  const searchInput = useSelector(pokemonsSel.pokemonsSearchInputSelector);
  const currentPage = useSelector(pokemonsSel.pokemonsCurrentPageSelector);

  useEffect(() => {
    dispatch(fetchPokemonsList(selectedType));
  }, [dispatch, selectedType]);

  const handleSortMethodClick = (pokemonsList: IPokemon[], option: string) => {
    dispatch(pokemonsOp.sortPokemonsList(pokemonsList, option));
  };

  const handleTypeClick = (pokemonsList: IPokemon[], option: string) => {
    dispatch(pokemonsOp.setType(option));
  };

  const handleLimitClick = (pokemonsList: IPokemon[], option: string) => {
    dispatch(pokemonsOp.setLimit(Number(option)));
  };

  const handlePageClick = (page: number) => {
    dispatch(pokemonsOp.setCurrentPage(page));
  };

  const handleSearchInputChange = (searchInput: string) =>
    console.log(searchInput);

  const pokemonsListRenderer = pokemonsList
    .filter((pokemon: IPokemon) =>
      pokemon.name.toLowerCase().includes(searchInput.toLowerCase())
    )
    .slice(currentPage * limit, currentPage * limit + limit)
    .map((pokemon) => <Card pokemon={pokemon} key={pokemon.id} />);

  return (
    <section className={styles.wrapper}>
      <Heading children="Pokédex" />
      <div className={styles.wrapper__firstSection}>
        <SearchInput onSearch={handleSearchInputChange} />
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
        <DropDown options={["10", "20", "50"]} handleClick={handleLimitClick} />
      </div>
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
