import React, { ReactNode } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "assets/icons";
import styles from "./OpenCloseButton.module.scss";

interface OpenCloseButtonProps {
  children: ReactNode;
  isExpanded: boolean;
}

const OpenCloseButton = ({ children, isExpanded }: OpenCloseButtonProps) => (
  <div className={styles.wrapper}>
    {isExpanded ? <ArrowUpIcon /> : <ArrowDownIcon />}
    {children}
  </div>
);

export default OpenCloseButton;
