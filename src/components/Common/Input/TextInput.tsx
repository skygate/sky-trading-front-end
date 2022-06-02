import React from "react";
import styles from "./TextInput.module.scss";

interface TextInputProps {
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const TextInput = ({ placeholder, onChange }: TextInputProps) => (
  <textarea
    className={styles.textArea}
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default TextInput;
