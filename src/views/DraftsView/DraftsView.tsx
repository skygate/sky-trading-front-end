import DraftCard from "components/DraftCard";
import DrafCardPlaceholder from "components/DraftCard/DrafCardPlaceholder";
import NavBar from "components/NavBar";
import styles from "./DraftsView.module.scss";

const DraftsView = () => {
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
              <DraftCard />
              <DraftCard />
              <DraftCard />
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
              <DraftCard />
              <DraftCard />
              <DraftCard />
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
