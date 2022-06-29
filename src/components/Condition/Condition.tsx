import TinyInput from "components/Common/TinyInput";
import { ConditionInterface } from "types/ConditionTypes";
import styles from "./Condition.module.scss";
import { Dispatch, SetStateAction, useEffect } from "react";

interface ConditionProps {
  condition: ConditionInterface;
  maxLength?: number;
  setEmaValue: Dispatch<SetStateAction<string>>;
  emaValue: string;
  setSmaValue: Dispatch<SetStateAction<string>>;
  smaValue: string;
}

const Condition = ({
  condition,
  maxLength,
  setEmaValue,
  setSmaValue,
  emaValue,
  smaValue,
}: ConditionProps) => {
  useEffect(() => {
    if (condition.value) {
      if (condition.name === "EMA") setEmaValue(condition.value);
      if (condition.name === "SMA") setSmaValue(condition.value);
    }
  }, [condition]);

  return (
    <div className={styles.wrapper}>
      {condition && (
        <>
          {condition.icon}
          {condition.name}
          {condition.name === "EMA" && (
            <TinyInput
              value={emaValue}
              setValue={setEmaValue}
              maxLength={maxLength}
            />
          )}
          {condition.name === "SMA" && (
            <TinyInput
              value={smaValue}
              setValue={setSmaValue}
              maxLength={maxLength}
            />
          )}
          {condition.id === "interval-days" && (
            <TinyInput
              value={smaValue}
              setValue={setSmaValue}
              maxLength={maxLength}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Condition;
