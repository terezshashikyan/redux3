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
      <a href="./" className={styles.wrapper__a}>
        Explore more Pokémon
      </a>
      <h3 className={styles.wrapper__h3}>
            #{pokemon?.id} {pokemon?.name}
      </h3>
      <div className={styles.wrapper__main}>
        <img
          src={pokemon?.sprites.other.dream_world.front_default}
          alt="pokemon"
          className={styles.wrapper__main__img}
        />


          <div className={styles.wrapper__main__details}>
            <p className={styles.wrapper__main__details__p}>
              <span className={styles.wrapper__details__span}>
                Height:
              </span>
              {pokemon?.height}
            </p>
            <p className={styles.wrapper__main__details__p}>
              <span className={styles.wrapper__main__details__span}>
                Weight:
              </span>
              {pokemon?.weight}
            </p>
            <p className={styles.wrapper__main__details__p}>
              <span className={styles.wrapper__main__details__span}>
                Category:
              </span>
              {pokemon?.abilities.map((ability) => ability.ability.name)}
            </p>
            <p className={styles.wrapper__main__details__p}>
              <span className={styles.wrapper__details__span}>
                Types:
              </span>
              {pokemon?.types.map((type) => type.type.name)}
            </p>
            <p className={styles.wrapper__main__details__p}>
              <span className={styles.wrapper__main__details__span}>
                Stats:
              </span>
              {pokemon?.stats.map((stat) => stat.stat.name)}
            </p>
            <p className={styles.wrapper__main__details__p}>
              <span className={styles.wrapper__main__details__span}>
                Evolutions:
              </span>
              {pokemon?.stats.map((stat) => stat.stat.name)}
            </p>
          </div>
        </div>
    </section>
  );
};

export default PokemonPage;
