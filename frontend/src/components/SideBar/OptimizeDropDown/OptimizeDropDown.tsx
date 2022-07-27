import { useState } from "react";
import ToggleButton from "components/Common/ToggleButton";
import styles from "./OptimizeDropDown.module.scss";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  MultiCastIcon,
  SmallGreenArrowUp,
  SmallRedArrowDown,
} from "assets/icons";

const OptimizeDropDown = () => {
  const [isActive, setActive] = useState(true);
  const [isListShown, setListShown] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div
          className={styles.dropWrapper}
          onClick={() => setListShown((prev) => !prev)}
        >
          {isListShown ? <ArrowUpIcon /> : <ArrowDownIcon />}
          Optimize
        </div>
        <ToggleButton isToggleActive={isActive} />
      </div>
      {isListShown &&
        (isActive ? (
          <>
            <div className={styles.listElement}>
              <MultiCastIcon />
              Conditions
              <div className={styles.row}>
                <SmallRedArrowDown />
                <span style={{ color: "var(--color-red)", fontWeight: 700 }}>
                  0,2%
                </span>
                <ToggleButton isToggleActive={true} />
              </div>
            </div>
            <div className={styles.listElement}>
              <MultiCastIcon />
              Conditions$
              <div className={styles.row}>
                <SmallGreenArrowUp />
                <span style={{ color: "var(--color-green)", fontWeight: 700 }}>
                  2,75%
                </span>
                <ToggleButton isToggleActive={true} />
              </div>
            </div>
          </>
        ) : (
          <div className={styles.listElement}>
            Start to create your strategy
          </div>
        ))}
    </div>
  );
};

export default OptimizeDropDown;
