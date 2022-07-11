import StrategyBar from "components/StrategyBar";
import { useAppDispatch, useStrategyCreationSelector } from "store/hooks";
import styles from "./StrategyInterface.module.scss";
import OpenCloseButton from "components/Buttons/OpenCloseButton";
import {
  setStrategyElementExpanded,
  setStrategyExpanded,
} from "store/strategyCreationSlice";
import ConditionButton from "components/Buttons/ConditionButton";
import AssetsButton from "components/Buttons/AssetsButton";
import AssetsBar from "components/AssetsBar";
import cx from "classnames";
import RiskButton from "components/Buttons/RiskButton";
import ChartButton from "components/Buttons/ChartButton";
import Bar from "components/Common/Bar";

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
          <div className={styles.elementsWrapper}>
            <div className={styles.element}>
              <OpenCloseButton
                isExpanded={open.isExpanded}
                onClick={() => dispatch(setStrategyElementExpanded("open"))}
              >
                Open
              </OpenCloseButton>
            </div>
            {open.isExpanded && (
              <>
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
              </>
            )}
          </div>
          <div className={styles.elementsWrapper}>
            <div className={styles.element}>
              <OpenCloseButton
                isExpanded={close.isExpanded}
                onClick={() => dispatch(setStrategyElementExpanded("close"))}
              >
                close
              </OpenCloseButton>
            </div>

            {close.isExpanded && (
              <>
                <div
                  className={cx(styles.elementsWrapper, styles.closeWrapper)}
                >
                  <div className={cx(styles.element, styles.close)}>
                    <ChartButton />
                  </div>
                </div>
                <div
                  className={cx(styles.elementsWrapper, styles.closeWrapper)}
                >
                  <div className={cx(styles.element, styles.close)}>
                    <ConditionButton onClick={() => {}} id="id2">
                      set conditions
                    </ConditionButton>
                  </div>
                </div>
                <div
                  className={cx(styles.elementsWrapper, styles.closeWrapper)}
                >
                  <div className={cx(styles.element, styles.close)}>
                    <RiskButton />
                  </div>
                </div>
              </>
            )}
          </div>

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
