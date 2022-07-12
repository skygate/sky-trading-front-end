import ChartButton from "components/Buttons/ChartButton";
import OpenCloseButton from "components/Buttons/OpenCloseButton";
import { useAppDispatch } from "store/hooks";
import { setStrategyElementExpanded } from "store/strategyCreationSlice";
import { OpenCloseStartegyElement } from "store/strategyInitialState";
import styles from "../StrategyInterface.module.scss";
import cx from "classnames";
import ConditionButton from "components/Buttons/ConditionButton";
import RiskButton from "components/Buttons/RiskButton";

export enum OpenCloseSectionTypes {
  OPEN = "open",
  CLOSE = "close",
}

interface OpenCloseSectionProps {
  type: OpenCloseSectionTypes;
}

const OpenCloseSection = ({
  type,
  isExpanded,
  chartType,
  timeFrame,
  conditions,
  risk,
}: OpenCloseSectionProps & OpenCloseStartegyElement) => {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.elementsWrapper}>
      <div className={styles.element}>
        <OpenCloseButton
          isExpanded={isExpanded}
          onClick={() => dispatch(setStrategyElementExpanded(type))}
        >
          {type}
        </OpenCloseButton>
      </div>
      {isExpanded && (
        <section>
          <div className={cx(styles.elementsWrapper, styles.openWrapper)}>
            <div className={cx(styles.element, styles.open)}>
              <ChartButton />
            </div>
          </div>
          <div className={cx(styles.elementsWrapper, styles.openWrapper)}>
            <div className={cx(styles.element, styles.open)}>
              <ConditionButton onClick={() => {}} id="id">
                set conditions
              </ConditionButton>
            </div>
          </div>
          <div className={cx(styles.elementsWrapper, styles.openWrapper)}>
            <div className={cx(styles.element, styles.open)}>
              <RiskButton />
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default OpenCloseSection;
