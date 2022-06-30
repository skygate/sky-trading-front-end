import TinyInput from "components/Common/TinyInput";
import { ConditionInterface } from "types/ConditionTypes";
import styles from "./Condition.module.scss";
import { useAppDispatch, useConditionsSelector } from "store/hooks";
import {
  setIndicatorValueAction,
  setIntervalsValueAction,
} from "store/conditionsSlice";
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
              setValue={(value) =>
                dispatch(
                  setIndicatorValueAction({
                    id,
                    key: IndicatorsNames.EMA,
                    value,
                  })
                )
              }
              maxLength={maxLength}
            />
          )}
          {condition.name === IndicatorsNames.SMA && (
            <TinyInput
              value={conditionElements?.indicators.SMA || ""}
              setValue={(value) =>
                dispatch(
                  setIndicatorValueAction({
                    id,
                    key: IndicatorsNames.SMA,
                    value,
                  })
                )
              }
              maxLength={maxLength}
            />
          )}
          {condition.id === "interval-days" && (
            <TinyInput
              value={conditionElements?.intervals.day || ""}
              setValue={(value) =>
                dispatch(
                  setIntervalsValueAction({
                    id,
                    key: "day",
                    value,
                  })
                )
              }
              maxLength={maxLength}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Condition;
