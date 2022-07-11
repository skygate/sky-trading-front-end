import styles from "./RiskButton.module.scss";

const RiskButton = () => (
  <button className={styles.wrapper} type="button">
    Risk managment <span className={styles.type}>type</span>
  </button>
);

export default RiskButton;
