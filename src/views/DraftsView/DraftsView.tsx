import DraftCard from "components/DraftCard";
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
          <DraftCard />
          <DraftCard />
          <DraftCard />
        </div>
        <div className={styles.list}>
          <div className={styles.header}>
            <h1 className={styles.title}>Clculated</h1>
            <p className={styles.description}>
              Here you can find calculated strategies
            </p>
            <button className={styles.seeAllButton}>see all</button>
          </div>
          <DraftCard />
          <DraftCard />
          <DraftCard />
        </div>
      </div>
    </>
  );
};

export default DraftsView;
