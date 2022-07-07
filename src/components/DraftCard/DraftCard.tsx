import styles from "./DraftCard.module.scss";
import Button, { ButtonSize } from "components/Buttons/Button";
import draftCardVisualisation from "assets/Image/draftCardVisualisation.png";
import { ClockIcon } from "assets/icons";

const DraftCard = () => (
  <div className={styles.wrapper}>
    <div className={styles.chart}>
      <img src={draftCardVisualisation} alt="visualisation" />
    </div>
    <div className={styles.infoWrapper}>
      <h1 className={styles.title}>Strategy Name</h1>
      <div className={styles.dateWrapper}>
        <ClockIcon />
        May 03 2022
      </div>
      <div className={styles.infoListWrapper}>
        <div className={styles.infoListItem}>
          <span className={styles.infoListHeader}>Capital</span>
          <span className={styles.infoContent}>-</span>
        </div>
        <div className={styles.infoListItem}>
          <span className={styles.infoListHeader}>Profit/Loss</span>
          <span className={styles.infoContent}>-</span>
        </div>
        <div className={styles.infoListItem}>
          <span className={styles.infoListHeader}>Profit/Loss in %</span>
          <span className={styles.infoContent}>-</span>
        </div>
      </div>
    </div>
    <div className={styles.buttonsWrapper}>
      <Button size={ButtonSize.MEDIUM}>Delete</Button>
      <Button size={ButtonSize.MEDIUM} color>
        Edit
      </Button>
    </div>
  </div>
);

export default DraftCard;
