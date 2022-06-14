import styles from "./DarkOverlay.module.scss";

interface DarkOveralyProps {
  onClick?: React.MouseEventHandler;
}

const DarkOverlay = ({ onClick }: DarkOveralyProps) => (
  <div className={styles.overlay} onClick={onClick} />
);

export default DarkOverlay;
