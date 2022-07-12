import StrategyBar from "components/StrategyBar";
import { useAppDispatch, useStrategyCreationSelector } from "store/hooks";
import styles from "./StrategyInterface.module.scss";
import {
  setStrategyElementExpanded,
  setStrategyExpanded,
} from "store/strategyCreationSlice";
import AssetsButton from "components/Buttons/AssetsButton";
import AssetsBar from "components/AssetsBar";
import cx from "classnames";
import Bar from "components/Common/Bar";
import OpenCloseSection from "./OpenCloseSection";
import { OpenCloseSectionTypes } from "./OpenCloseSection/OpenCloseSection";

const StrategyInterface = () => {
  const dispatch = useAppDispatch();
  const { name, isExpanded, open, close, asset, interval } =
    useStrategyCreationSelector();

  return (
    <>
      <div
        className={styles.strategyBarWrapper}
        onClick={() => dispatch(setStrategyExpanded(!isExpanded))}
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
                onClick={() => dispatch(setStrategyElementExpanded("asset"))}
              />
            </div>

            {asset.isExpanded && (
              <div className={cx(styles.elementsWrapper, styles.assetsWrapper)}>
                <div className={cx(styles.element, styles.assets)}>
                  <AssetsBar id="id2" parentId="id3" />
                </div>
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
