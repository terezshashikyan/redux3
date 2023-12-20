import { ICardProps} from "./types";

import styles from "./Card.module.scss";

const Card: React.FC<ICardProps>= ({pokemon}) => {
  
  return <figure className={styles.wrapper}>
    <img className={styles.img} src={pokemon.sprites.other.dream_world.front_default} alt="pokemon" />
    <p className={styles.primaryText}>{pokemon.name}</p>
    <p className={styles.secondaryText}>#{pokemon.id}</p>
    <p className={styles.secondaryText}>{(pokemon.types).map((typeObject)=> <span>{typeObject.type.name} </span>)}</p>
  </figure>
};

export default Card;