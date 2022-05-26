import React, { useState } from "react";
import styles from "./ToggleButton.module.scss";
import cx from "classnames";

interface ToggleButtonProps {
  isToggleActive: boolean;
}

const ToggleButton = ({ isToggleActive }: ToggleButtonProps) => {
  const [isToggleOn, setToggleOn] = useState(false);
  return (
    <>
      {isToggleActive ? (
        isToggleOn ? (
          <div
            className={cx(styles.wrapper, styles.wrapperOn)}
            onClick={() => setToggleOn((prev) => !prev)}
          >
            <div className={styles.switchOn}></div>
          </div>
        ) : (
          <div
            className={styles.wrapper}
            onClick={() => setToggleOn((prev) => !prev)}
          >
            <div className={styles.switchOff}></div>
          </div>
        )
      ) : (
        <div
          className={cx(styles.wrapper, styles.wrapperInactive)}
          onClick={() => setToggleOn((prev) => !prev)}
        >
          <div className={styles.switchOff}></div>
        </div>
      )}
    </>
  );
};

export default ToggleButton;
