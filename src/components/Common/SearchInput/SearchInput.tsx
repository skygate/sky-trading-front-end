import React from "react";
import { SearchIcon } from "../../../assets/icons";
import styles from "./SearchInput.module.scss";

interface SearchInputProps {
  placeholder: string;
}

const SearchInput = ({ placeholder }: SearchInputProps) => (
  <div className={styles.wrapper}>
    <div className={styles.iconWrapper}>
      <SearchIcon />
    </div>
    <input type="text" placeholder={placeholder} className={styles.input} />
  </div>
);

export default SearchInput;
