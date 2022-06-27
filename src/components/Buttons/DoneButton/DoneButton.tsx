import React from "react";
import styles from "./DoneButton.module.scss";
import cx from "classnames";

interface DoneButtonProps {
  active?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const DoneButton = ({ active, onClick }: DoneButtonProps) => (
  <button
    onClick={(e) => active && onClick(e)}
    className={cx(styles.button, active && styles.active)}
  >
    <span>Done</span>
  </button>
);

export default DoneButton;
