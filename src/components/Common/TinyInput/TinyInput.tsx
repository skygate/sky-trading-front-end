import { ChangeEvent, Dispatch, SetStateAction } from "react";
import styles from "./TinyInput.module.scss";

interface TinyInputProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  maxLength?: number;
  max?: number;
  min?: number;
}

const TinyInput = ({
  value,
  setValue,
  maxLength,
  min,
  max,
}: TinyInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let valueToSet = e.target.value;
    if (max && parseFloat(valueToSet) > max) {
      valueToSet = max.toString();
    }
    if (min && parseFloat(valueToSet) < min) {
      valueToSet = min.toString();
    }
    if (min === 0 && value.startsWith("-")) {
      valueToSet = "0";
    }
    console.log(valueToSet);
    setValue(valueToSet);
  };

  return (
    <input
      type="number"
      className={styles.input}
      placeholder="x"
      value={value}
      onChange={handleChange}
      maxLength={maxLength}
      max={max}
      min={min}
    />
  );
};

export default TinyInput;
