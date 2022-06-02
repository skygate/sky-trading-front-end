import React from "react";
import styles from "./DoneButton.module.scss";
import cx from "classnames";

interface DoneButtonProps {
  active?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const DoneButton = ({ active, onClick }: DoneButtonProps) => (
  <button
    onClick={onClick}
    className={active ? cx(styles.button, styles.active) : styles.button}
  >
    <span>Done</span>
  </button>
);

export default DoneButton;
