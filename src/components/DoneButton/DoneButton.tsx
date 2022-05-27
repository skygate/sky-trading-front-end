import React from "react";
import styles from "./DoneButton.module.scss";
import cx from "classnames";

interface DoneButtonProps {
  active?: boolean;
}

const DoneButton = ({ active }: DoneButtonProps) => (
  <button className={active ? cx(styles.button, styles.active) : styles.button}>
    <span>Done</span>
  </button>
);

export default DoneButton;
