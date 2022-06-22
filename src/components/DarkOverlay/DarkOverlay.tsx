import styles from "./DarkOverlay.module.scss";
import cx from "classnames";

interface DarkOveralyProps {
  onClick?: React.MouseEventHandler;
  modal?: boolean;
}

const DarkOverlay = ({ onClick, modal }: DarkOveralyProps) => (
  <div
    className={cx(styles.overlay, modal && styles.modalOverlay)}
    onClick={onClick}
  />
);

export default DarkOverlay;
