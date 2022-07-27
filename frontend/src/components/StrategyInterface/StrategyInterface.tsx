import StrategyBar from "components/StrategyBar";
import { useAppDispatch, useStrategyCreationSelector } from "store/hooks";
import styles from "./StrategyInterface.module.scss";
import {
  setStrategyElementExpandedAction,
  setStrategyExpandedAction,
} from "store/strategyCreationSlice";
import AssetsButton from "components/Buttons/AssetsButton";
import AssetsBar from "components/AssetsBar";
import cx from "classnames";
import Bar from "components/Common/Bar";
import OpenCloseSection from "./OpenCloseSection";
import { OpenCloseSectionTypes } from "./OpenCloseSection/OpenCloseSection";
import AllocationButton from "components/Buttons/AllocationButton";

const StrategyInterface = () => {
  const dispatch = useAppDispatch();
  const { name, isExpanded, open, close, asset, interval, allocation } =
    useStrategyCreationSelector();

  return (
    <>
      <div
        className={styles.strategyBarWrapper}
        onClick={() => dispatch(setStrategyExpandedAction(!isExpanded))}
      >
        <StrategyBar isExpanded={isExpanded} name={name} />
      </div>
      {isExpanded && (
        <div>
          <OpenCloseSection type={OpenCloseSectionTypes.OPEN} {...open} />
          <OpenCloseSection type={OpenCloseSectionTypes.CLOSE} {...close} />

          <div className={styles.elementsWrapper}>
            <div className={styles.element}>
              <AssetsButton
                isExpanded={asset.isExpanded}
                onClick={() =>
                  dispatch(setStrategyElementExpandedAction("asset"))
                }
              />
            </div>

            {asset.isExpanded && (
              <div className={cx(styles.elementsWrapper, styles.assetsWrapper)}>
                <div className={cx(styles.element, styles.assets)}>
                  <AssetsBar {...asset} />
                </div>
                {asset.symbol && (
                  <div
                    className={cx(
                      styles.elementsWrapper,
                      styles.allocationWrapper
                    )}
                  >
                    <div className={cx(styles.element, styles.allocation)}>
                      <AllocationButton {...allocation} />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className={cx(styles.elementsWrapper, styles.strategyWrapper)}>
            <div className={cx(styles.element, styles.strategy)}>
              <Bar>Choose time interval</Bar>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StrategyInterface;
