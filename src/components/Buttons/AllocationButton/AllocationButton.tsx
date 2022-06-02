import React, { ReactNode } from "react";
import styles from "./AllocationButton.module.scss";
import { ArrowDownIcon } from "../../../assets/icons";

interface AllocationButtonProps {
  children: ReactNode;
}

const AllocationButton = ({ children }: AllocationButtonProps) => (
  <div className={styles.wrapper}>
    <ArrowDownIcon /> <span style={{ fontWeight: 500 }}>FoundAllocation</span>
    {children}
  </div>
);

export default AllocationButton;
