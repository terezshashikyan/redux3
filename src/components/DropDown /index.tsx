import { useState } from "react";
import { IDropdownProps } from "./types";

import styles from "./DropDown.module.scss";
import { IPokemon } from "../Card/types";
import { useSelector } from "react-redux";
import { pokemonsSel } from "../../store/pokemons";

const DropDown: React.FC<IDropdownProps> = ({ options, handleClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | "">("");
  const pokemonsList = useSelector(pokemonsSel.pokemonsListSelector);

  const handleOptionClick = (pokemonsList: IPokemon[], option: string) => {
    setIsOpen(false);
    setSelectedOption(option);
    handleClick(pokemonsList, option);
  };

  return (
    <div className={styles.dropdown}>
      <div
        className={styles.dropdown__toggle}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption || "Select an option"}
      </div>
      {isOpen && (
        <ul className={styles.dropdown__options}>
          {options.map((option: string) => (
            <li
              key={option}
              className={styles.dropdown__option}
              onClick={() => handleOptionClick(pokemonsList, option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
