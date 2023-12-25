import { ICardProps } from "./types";
import { useNavigate } from "react-router-dom";

import styles from "./Card.module.scss";

const Card: React.FC<ICardProps> = ({ pokemon }) => {
  console.log(pokemon.sprites.other.dream_world.front_default, "jjj");
  const navigate = useNavigate();

  return (
    <figure
      className={styles.wrapper}
      onClick={() => navigate(`${pokemon.id}`)}
    >
      <img
        className={styles.img}
        src={pokemon.sprites.other.dream_world.front_default}
        alt="pokemon"
      />
      <p className={styles.primaryText}>{pokemon.name}</p>
      <p className={styles.secondaryText}>#{pokemon.id}</p>
      <p className={styles.secondaryText}>
        {pokemon.types.map((typeObject) => (
          <span>{typeObject.type.name} </span>
        ))}
      </p>
    </figure>
  );
};

export default Card;
