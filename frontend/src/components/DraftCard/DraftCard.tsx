import styles from "./DraftCard.module.scss";
import Button, { ButtonSize } from "components/Buttons/Button";
import draftCardVisualisation from "assets/Image/draftCardVisualisation.png";
import { ClockIcon } from "assets/icons";
import { useEffect, useState } from "react";
import { useDeleteStrategyMutation } from "store/strategyApi";

interface DraftCardProps {
  id: string;
  name: string;
  date: Date;
}

const DraftCard = ({ id, name, date }: DraftCardProps) => {
  const [formattedDate, setFormattedDate] = useState("");
  const [deleteStrategy, result] = useDeleteStrategyMutation();

  useEffect(() => {
    setFormattedDate(
      new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      }).format(new Date(date))
    );
  }, [date]);

  return (
    <section className={styles.wrapper}>
      <div className={styles.chart}>
        <img src={draftCardVisualisation} alt="visualisation" />
      </div>
      <div className={styles.infoWrapper}>
        <h1 className={styles.title}>{name}</h1>
        <div className={styles.dateWrapper}>
          <ClockIcon />
          {formattedDate}
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
        <Button size={ButtonSize.MEDIUM} onClick={() => deleteStrategy(id)}>
          Delete
        </Button>
        <Button size={ButtonSize.MEDIUM} color>
          Edit
        </Button>
      </div>
    </section>
  );
};

export default DraftCard;
