import React from "react";
import styles from "./TextInput.module.scss";

interface TextInputProps {
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
}

const TextInput = ({
  placeholder,
  onChange,
  value,
  onBlur,
}: TextInputProps) => (
  <textarea
    className={styles.textArea}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    onBlur={onBlur}
  />
);

export default TextInput;
