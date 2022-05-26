import React, { ReactNode } from "react";
import { ArrowDownIcon } from "../../assets/icons";
import styles from "./OpenCloseButton.module.scss";

interface OpenCloseButtonProps {
  children: ReactNode;
}

const OpenCloseButton = ({ children }: OpenCloseButtonProps) => (
  <div className={styles.wrapper}>
    <ArrowDownIcon />
    {children}
  </div>
);

export default OpenCloseButton;
