import Button, { ButtonSize } from "components/Buttons";
import { Dispatch, SetStateAction, useState } from "react";
import { Hint } from "../SetConditionModal";
import styles from "./SetIndicatorModal.module.scss";

interface SetIndicatorModalProps {
  indicator: Hint;
  setDisplayedIndicator: Dispatch<SetStateAction<null | Hint>>;
  setCurrentIndicatorParameters: Dispatch<SetStateAction<any>>;
}

const SetIndicatorModal = ({
  indicator,
  setDisplayedIndicator,
  setCurrentIndicatorParameters,
}: SetIndicatorModalProps) => {
  const [inputValue, setInputValue] = useState("");

  const submitIndicator = () => {
    setDisplayedIndicator(null);
    setCurrentIndicatorParameters(`(${inputValue})`);
  };

  return (
    <div className={styles.wrapper}>
      <h1>{indicator.name}</h1>
      {indicator.parameters?.map((item) => (
        <div className={styles.inputWrapper}>
          <label>{item.name}</label>
          <input
            type="number"
            className={styles.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></input>
        </div>
      ))}
      <Button size={ButtonSize.LARGE} onClick={submitIndicator}>
        Set indicator
      </Button>
    </div>
  );
};

export default SetIndicatorModal;
