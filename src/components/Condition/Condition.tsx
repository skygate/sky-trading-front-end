import TinyInput from "components/Common/TinyInput";
import { ConditionInterface } from "types/ConditionTypes";
import styles from "./Condition.module.scss";
import { useAppDispatch, useConditionsSelector } from "store/hooks";
import {} from "store/conditionsSlice";
import { IndicatorsNames } from "constant/conditions";

interface ConditionProps {
  condition: ConditionInterface;
  maxLength?: number;
  id: string;
}

const Condition = ({ condition, maxLength, id }: ConditionProps) => {
  const dispatch = useAppDispatch();
  const conditionElements = useConditionsSelector(id);

  return (
    <div className={styles.wrapper}>
      {condition && (
        <>
          {condition.icon}
          {condition.name}
          {condition.name === IndicatorsNames.EMA && (
            <TinyInput
              value={conditionElements?.indicators.EMA || ""}
              setValue={(value) => null}
              maxLength={maxLength}
            />
          )}
          {condition.name === IndicatorsNames.SMA && (
            <TinyInput
              value={conditionElements?.indicators.SMA || ""}
              setValue={(value) => null}
              maxLength={maxLength}
            />
          )}
          {condition.id === "interval-days" && (
            <TinyInput
              value={conditionElements?.intervals.day || ""}
              setValue={(value) => null}
              maxLength={maxLength}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Condition;
