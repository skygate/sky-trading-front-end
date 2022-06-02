import React, { ReactNode } from "react";
import styles from "./Bar.module.scss";

interface BarProps {
  children: ReactNode;
  width?: string;
}

const Bar = ({ children, width }: BarProps) => (
  <div className={styles.wrapper} style={{ width }}>
    {children}
  </div>
);

export default Bar;
