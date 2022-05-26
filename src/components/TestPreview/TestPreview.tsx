import React, { useState } from "react";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  SmallGreenArrowUp,
} from "../../assets/icons";
import styles from "./TestPreview.module.scss";
import graphImage from "../../assets/Image/PreviewTestGraph.png";

const TestPreview = () => {
  const [isDropDownExpanded, setDropDownExpanded] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.header}
        onClick={() => setDropDownExpanded((prev) => !prev)}
      >
        {isDropDownExpanded ? <ArrowUpIcon /> : <ArrowDownIcon />} Test Preview
      </div>
      {isDropDownExpanded && (
        <>
          <div className={styles.graph}>
            <img src={graphImage} alt="graph" />
          </div>
          <div className={styles.listElement}>
            <span style={{ fontSize: "var(--font-14)" }}>Capital</span>{" "}
            <span style={{ fontWeight: 700 }}>1234 zl</span>
          </div>
          <div className={styles.listElement}>
            <span>Profit/Loss</span>{" "}
            <span style={{ fontWeight: 700 }}>1234 zl</span>
          </div>
          <div className={styles.listElement}>
            <span>Profit/Loss in %</span>{" "}
            <span>
              <span style={{ fontWeight: 700, color: "var(--color-green)" }}>
                <SmallGreenArrowUp /> 25%
              </span>
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default TestPreview;
