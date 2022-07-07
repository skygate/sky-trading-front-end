import DraftCard from "components/DraftCard";
import DrafCardPlaceholder from "components/DraftCard/DrafCardPlaceholder";
import NavBar from "components/NavBar";
import { useDraftsSelector } from "store/hooks";
import styles from "./DraftsView.module.scss";

const DraftsView = () => {
  const drafts = useDraftsSelector();
  return (
    <>
      <NavBar />
      <div className={styles.wrapper}>
        <div className={styles.list}>
          <div className={styles.header}>
            <h1 className={styles.title}>Drafts</h1>
            <p className={styles.description}>
              This section is only for you. Here you can edit yout strategy or
              calculate it for later usage
            </p>
            <button className={styles.seeAllButton}>see all</button>
          </div>
          <div className={styles.listElementsWrapper}>
            <ul className={styles.listElements}>
              {drafts &&
                Array.isArray(drafts) &&
                drafts.map((item) => (
                  <DraftCard id={item.id} name={item.name} date={item.date} />
                ))}
              <DrafCardPlaceholder>
                Start crate your strategy
              </DrafCardPlaceholder>
            </ul>
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.header}>
            <h1 className={styles.title}>Calculated</h1>
            <p className={styles.description}>
              Here you can find calculated strategies
            </p>
            <button className={styles.seeAllButton}>see all</button>
          </div>
          <div className={styles.listElementsWrapper}>
            <ul className={styles.listElements}>
              <DrafCardPlaceholder>
                Crate and calculate strategy
              </DrafCardPlaceholder>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DraftsView;
