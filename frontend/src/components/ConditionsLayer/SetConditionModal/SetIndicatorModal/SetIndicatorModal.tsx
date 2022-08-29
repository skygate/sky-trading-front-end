import { CloseIcon } from "assets/icons";
import Button, { ButtonSize } from "components/Buttons";
import { Dispatch, SetStateAction, useState } from "react";
import { Hint } from "../SetConditionModal";
import styles from "./SetIndicatorModal.module.scss";

interface SetIndicatorModalProps {
  indicator: Hint;
  setDisplayedIndicator: Dispatch<SetStateAction<null | Hint>>;
  setCurrentIndicatorParameters: Dispatch<SetStateAction<any>>;
  setWords: Dispatch<SetStateAction<string[]>>;
}

const SetIndicatorModal = ({
  indicator,
  setDisplayedIndicator,
  setCurrentIndicatorParameters,
  setWords,
}: SetIndicatorModalProps) => {
  const [inputValue, setInputValue] = useState("");

  const submitIndicator = () => {
    setDisplayedIndicator(null);
    setCurrentIndicatorParameters(`(${inputValue})`);
  };

  const cancelIndicator = () => {
    setDisplayedIndicator(null);
    setWords((prev) => [...prev.slice(0, -1)]);
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h3>{indicator.name}</h3>
        <button type="button" className={styles.closeButton}>
          <CloseIcon />
        </button>
      </header>
      {indicator.parameters?.map((item) => (
        <div className={styles.inputWrapper}>
          <label>{item.name}</label>
          <input
            type="number"
            className={styles.input}
            value={inputValue}
            placeholder="10"
            onChange={(e) => setInputValue(e.target.value)}
          ></input>
        </div>
      ))}
      <div className={styles.buttons}>
        <Button size={ButtonSize.SMALL} onClick={cancelIndicator}>
          Cancel
        </Button>
        <Button color size={ButtonSize.SMALL} onClick={submitIndicator}>
          Ok
        </Button>
      </div>
    </div>
  );
};

export default SetIndicatorModal;
