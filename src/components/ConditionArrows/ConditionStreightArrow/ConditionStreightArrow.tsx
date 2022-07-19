import styles from "./ConditionStreightArrow.module.scss";
import cx from "classnames";

interface ConditionStreightArrowProps {
  fill?: boolean;
}

const ConditionStreightArrow = ({ fill }: ConditionStreightArrowProps) => (
  <div className={cx(styles.wrapper, fill && styles.fill)} />
);

export default ConditionStreightArrow;
