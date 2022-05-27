import React, { useState } from "react";
import { ChartIcon, CloseIcon, RecipeIcon, UserIcon } from "../../assets/icons";
import SearchInput from "../Common/SearchInput/SearchInput";
import styles from "./ChooseConditionsModal.module.scss";
import cx from "classnames";

enum ChoosedModalOptions {
  SCRIPTS = "scripts",
  TECHNICALS = "technicals",
  FINANCIALS = "financials",
}

const ChooseConditionsModal = () => {
  const [activeOption, setActiveOption] = useState(
    ChoosedModalOptions.TECHNICALS
  );

  const technicalOptions = [
    "Indicators",
    "Chart patterns",
    "Candlestick patterns",
    "group",
  ];

  const financialOptions = [
    "Income statement",
    "Cash flow",
    "Statistic",
    "Balance Sheet",
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span>Chose Conditions</span>

        <CloseIcon />
      </div>
      <SearchInput placeholder="Search for conditions" />
      <div className={styles.bodyWrapper}>
        <div className={styles.sidebar}>
          <div
            className={
              activeOption === ChoosedModalOptions.SCRIPTS
                ? cx(styles.sidebarElement, styles.active)
                : styles.sidebarElement
            }
            onClick={() => setActiveOption(ChoosedModalOptions.SCRIPTS)}
          >
            <UserIcon />
            My scripts
          </div>
          <div
            className={
              activeOption === ChoosedModalOptions.TECHNICALS
                ? cx(styles.sidebarElement, styles.active)
                : styles.sidebarElement
            }
            onClick={() => setActiveOption(ChoosedModalOptions.TECHNICALS)}
          >
            <ChartIcon /> Technicals
          </div>
          <div
            className={
              activeOption === ChoosedModalOptions.FINANCIALS
                ? cx(styles.sidebarElement, styles.active)
                : styles.sidebarElement
            }
            onClick={() => setActiveOption(ChoosedModalOptions.FINANCIALS)}
          >
            <RecipeIcon />
            Financials
          </div>
        </div>
        <div className={styles.grid}>
          {activeOption === ChoosedModalOptions.SCRIPTS ? (
            <div className={styles.comming}>Comming soon</div>
          ) : (
            <div className={styles.gridHeader}>
              {activeOption === ChoosedModalOptions.TECHNICALS &&
                technicalOptions.map((item) => (
                  <div className={styles.gridHeaderOption}>{item}</div>
                ))}
              {activeOption === ChoosedModalOptions.FINANCIALS &&
                financialOptions.map((item) => (
                  <div className={styles.gridHeaderOption}>{item}</div>
                ))}
            </div>
          )}
          <div className={styles.bodyGrid}></div>
        </div>
      </div>
    </div>
  );
};

export default ChooseConditionsModal;
