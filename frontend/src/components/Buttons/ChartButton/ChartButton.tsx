import styles from "./ChartButton.module.scss";

const ChartButton = () => (
  <div className={styles.wrapper}>
    <button className={styles.button}>
      Chart type <span className={styles.typeText}>type</span>
    </button>
    <button className={styles.button}>
      Time frame <span className={styles.typeText}>type</span>
    </button>
  </div>
);

export default ChartButton;
