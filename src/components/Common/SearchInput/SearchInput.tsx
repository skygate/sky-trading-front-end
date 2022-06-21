import React from "react";
import { SearchIcon } from "assets/icons";
import styles from "./SearchInput.module.scss";

interface SearchInputProps {
  placeholder: string;
  onChange?: React.ChangeEventHandler;
  value?: string;
}

const SearchInput = ({ placeholder, onChange, value }: SearchInputProps) => (
  <div className={styles.wrapper}>
    <div className={styles.iconWrapper}>
      <SearchIcon />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className={styles.input}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default SearchInput;
