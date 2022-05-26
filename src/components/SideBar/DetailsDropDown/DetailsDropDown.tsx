import React, { useState } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "../../../assets/icons";
import styles from "./DetailsDropDown.module.scss";

const DetailsDropDown = () => {
  const [isListShown, setListShown] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div
          className={styles.dropWrapper}
          onClick={() => setListShown((prev) => !prev)}
        >
          {isListShown ? <ArrowUpIcon /> : <ArrowDownIcon />}
          Details
        </div>
      </div>
      {isListShown && (
        <>
          <div className={styles.listElement}>
            <span>Name</span> <span>New Strategy</span>
          </div>
          <div className={styles.listElement}>
            <span>Description</span>{" "}
            <span>Write something more about your Strategy</span>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailsDropDown;
