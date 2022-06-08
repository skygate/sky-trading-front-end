import React, { ReactNode } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "assets/icons";
import styles from "./OpenCloseButton.module.scss";

interface OpenCloseButtonProps {
  children: ReactNode;
  isExpanded: boolean;
  onClick: (e: React.MouseEvent) => void;
}

const OpenCloseButton = ({
  children,
  isExpanded,
  onClick,
}: OpenCloseButtonProps) => (
  <div className={styles.wrapper} onClick={onClick}>
    {isExpanded ? <ArrowUpIcon /> : <ArrowDownIcon />}
    {children}
  </div>
);

export default OpenCloseButton;
