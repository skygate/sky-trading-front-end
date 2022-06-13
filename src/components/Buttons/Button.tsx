import React, { ReactNode } from "react";
import cx from "classnames";
import styles from "./Button.module.scss";

export enum ButtonSize {
  LARGE = "large",
  MEDIUM = "medium",
  SMALL = "small",
}

interface ButtonProps {
  children: ReactNode;
  size: ButtonSize;
  color?: boolean;
}

interface RestButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  children,
  size,
  color,
  ...props
}: ButtonProps & RestButtonProps) => (
  <button
    className={
      color
        ? cx(styles.button, styles[size], styles.color)
        : cx(styles.button, styles[size])
    }
    {...props}
  >
    {children}
  </button>
);

export default Button;
