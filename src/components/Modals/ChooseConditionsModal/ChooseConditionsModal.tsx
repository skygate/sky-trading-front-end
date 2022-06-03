import React, { useEffect, useState } from "react";
import { ChartIcon, CloseIcon, RecipeIcon, UserIcon } from "assets/icons";
import SearchInput from "components/Common/SearchInput/SearchInput";
import styles from "./ChooseConditionsModal.module.scss";
import cx from "classnames";
import ConditionsGrid from "./ConditionsGrid/ConditionsGrid";

enum ChoosedModalOptions {
  SCRIPTS = "scripts",
  TECHNICALS = "technicals",
  FINANCIALS = "financials",
}

export interface OptionsInterface {
  name: string;
  elements: string[];
}

const technicalOptions = [
  { name: "Indicators", elements: ["EMA", "SMA", "Stochastic", "RSI"] },
  { name: "Chart patterns", elements: [] },
  { name: "Candlestick patterns", elements: [] },
  { name: "group", elements: [] },
];

const financialOptions = [
  { name: "Income statement", elements: ["element1", "element2"] },
  { name: "Cash flow", elements: ["element1", "element2"] },
  { name: "Statistic", elements: ["element1", "element2"] },
  { name: "Balance Sheet", elements: ["element1", "element2"] },
];

const ChooseConditionsModal = () => {
  const [activeOption, setActiveOption] = useState(
    ChoosedModalOptions.TECHNICALS
  );
  const [currentData, setCurrentData] =
    useState<OptionsInterface[]>(technicalOptions);

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
            className={cx(
              styles.sidebarElement,
              activeOption === ChoosedModalOptions.SCRIPTS && styles.active
            )}
            onClick={() => {
              setActiveOption(ChoosedModalOptions.SCRIPTS);
              setCurrentData([]);
            }}
          >
            <UserIcon />
            My scripts
          </div>
          <div
            className={cx(
              styles.sidebarElement,
              activeOption === ChoosedModalOptions.TECHNICALS && styles.active
            )}
            onClick={() => {
              setActiveOption(ChoosedModalOptions.TECHNICALS);
              setCurrentData(technicalOptions);
            }}
          >
            <ChartIcon /> Technicals
          </div>
          <div
            className={cx(
              styles.sidebarElement,
              activeOption === ChoosedModalOptions.FINANCIALS && styles.active
            )}
            onClick={() => {
              setActiveOption(ChoosedModalOptions.FINANCIALS);
              setCurrentData(financialOptions);
            }}
          >
            <RecipeIcon />
            Financials
          </div>
        </div>
        <ConditionsGrid data={currentData} />
      </div>
    </div>
  );
};

export default ChooseConditionsModal;
