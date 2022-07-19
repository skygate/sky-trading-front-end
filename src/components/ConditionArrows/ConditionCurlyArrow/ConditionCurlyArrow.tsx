import styles from "./ConditionCurlyArrow.module.scss";
import cx from "classnames";

interface ConditionCurlyArrowProps {
  fill?: boolean;
}

const ConditionCurlyArrow = ({ fill }: ConditionCurlyArrowProps) => (
  <div className={cx(styles.wrapper, fill && styles.fill)} />
);

export default ConditionCurlyArrow;
