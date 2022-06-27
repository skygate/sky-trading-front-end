import TinyInput from "components/Common/TinyInput";
import { ConditionInterface } from "constant/conditions";
import React from "react";
import styles from "./Condition.module.scss";

interface ConditionProps {
  condition: ConditionInterface;
  inputValue?: string;
  setInputValue?: React.Dispatch<React.SetStateAction<string>>;
  maxLength?: number;
}

const Condition = ({
  condition,
  inputValue,
  setInputValue,
  maxLength,
}: ConditionProps) => (
  <div className={styles.wrapper}>
    {condition && (
      <>
        {condition.icon}
        {condition.name}
        {inputValue && setInputValue && (
          <TinyInput
            value={inputValue}
            setValue={setInputValue}
            maxLength={maxLength}
          />
        )}
      </>
    )}
  </div>
);

export default Condition;
