import React, { useState, ChangeEvent, FormEvent } from "react";

import styles from "./SearchInput.module.scss";

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <input
        className={styles.wrapper__input}
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button className={styles.wrapper__button} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchInput;
