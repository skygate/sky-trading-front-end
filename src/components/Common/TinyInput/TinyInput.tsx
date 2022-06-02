import React, { SetStateAction } from "react";
import styles from "./TinyInput.module.scss";

interface TinyInputProps {
  value: string;
  setValue: React.Dispatch<SetStateAction<string>>;
  maxLength?: number;
}

const TinyInput = ({ value, setValue, maxLength }: TinyInputProps) => (
  <input
    className={styles.input}
    placeholder="x"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    maxLength={maxLength}
  />
);

export default TinyInput;
