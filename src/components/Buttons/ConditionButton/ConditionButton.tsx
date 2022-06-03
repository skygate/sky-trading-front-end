import React, { ReactNode } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "assets/icons";
import styles from "./ConditionButton.module.scss";

interface ConditionButtonProps {
  children: ReactNode;
  isExpanded: boolean;
}

const ConditionButton = ({ children, isExpanded }: ConditionButtonProps) => (
  <div className={styles.wrapper}>
    {isExpanded ? <ArrowUpIcon /> : <ArrowDownIcon />}
    <span style={{ fontWeight: 700 }}>If</span>
    {children}
  </div>
);

export default ConditionButton;
