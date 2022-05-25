import React, { ReactNode } from "react";
import styles from "./Bar.module.scss";

interface BarProps {
  children: ReactNode;
}

const Bar = ({ children }: BarProps) => (
  <div className={styles.wrapper}>{children}</div>
);

export default Bar;
