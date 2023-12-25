import { useDispatch, useSelector } from "react-redux";
import styles from "./PokemonPage.module.scss";
import { useParams } from "react-router-dom";
import { AppDispatch } from "../../store";
import { pokemonsOp, pokemonsSel } from "../../store/pokemons";
import { useEffect } from "react";

const PokemonPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (id) {
      dispatch(pokemonsOp.setPokemon(Number(id)));
    }
  }, []);
  const pokemon = useSelector(pokemonsSel.pokemonSelector);

  return (
    <section className={styles.wrapper}>
      <img
        src={pokemon?.sprites.other.dream_world.front_default}
        alt="pokemon"
        className={styles.wrapper__img}
      />
      <div className={styles.wrapper__content}>
        <a href="./" className={styles.wrapper__content__a}>
          Explore more Pokémon
        </a>
        <h3 className={styles.wrapper__content__h3}>
          {pokemon?.id} {pokemon?.name}
        </h3>
        <div className={styles.wrapper__content__details}>
          <p className={styles.wrapper__content__details__p}>
            <span className={styles.wrapper__content__details__span}>
              Height:
            </span>
            {pokemon?.height}
          </p>
          <p className={styles.wrapper__content__details__p}>
            <span className={styles.wrapper__content__details__span}>
              Weight:
            </span>
            {pokemon?.weight}
          </p>
          <p className={styles.wrapper__content__details__p}>
            <span className={styles.wrapper__content__details__span}>
              Category:
            </span>
            {pokemon?.}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PokemonPage;
