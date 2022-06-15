import cx from "classnames";
import React, { ReactNode } from "react";
import styles from "./Bar.module.scss";

interface BarProps {
  children: ReactNode;
  width?: string;
  onClick?: React.MouseEventHandler;
  className?: string;
}

const Bar = ({ children, width, onClick, className }: BarProps) => (
  <div
    className={cx(styles.wrapper, className)}
    style={{ width }}
    onClick={onClick}
  >
    {children}
  </div>
);

export default Bar;
