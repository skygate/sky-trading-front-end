import React, { ReactNode } from "react";
import { ArrowDownIcon } from "../../../../assets/icons";
import styles from "./ConditionButton.module.scss";

interface ConditionButtonProps {
  children: ReactNode;
}

const ConditionButton = ({ children }: ConditionButtonProps) => (
  <div className={styles.wrapper}>
    <ArrowDownIcon />
    <span style={{ fontWeight: 700 }}>If</span>
    {children}
  </div>
);

export default ConditionButton;
