import React from "react";
import { SearchIcon } from "../../../assets/icons";
import styles from "./SearchInput.module.scss";

const SearchInput = () => (
  <div className={styles.wrapper}>
    <div className={styles.iconWrapper}>
      <SearchIcon />
    </div>
    <input type="text" className={styles.input} />
  </div>
);

export default SearchInput;
