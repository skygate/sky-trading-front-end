import React, { useState } from "react";
import { ChartIcon, CloseIcon, RecipeIcon, UserIcon } from "assets/icons";
import SearchInput from "components/Common/SearchInput/SearchInput";
import styles from "./ChooseConditionsModal.module.scss";
import cx from "classnames";
import ConditionsGrid from "./ConditionsGrid/ConditionsGrid";
import { CONDITIONS, ConditionsType } from "constant/conditions";

enum ChoosedModalOptions {
  SCRIPTS = "scripts",
  TECHNICALS = "technicals",
  FINANCIALS = "financials",
}

interface SetConditionsModalProps {
  setModalsShown: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChooseConditionsModal = ({ setModalsShown }: SetConditionsModalProps) => {
  const [activeOption, setActiveOption] = useState(
    ChoosedModalOptions.TECHNICALS
  );
  const [currentData, setCurrentData] = useState<ConditionsType>(CONDITIONS);

  const handleModalsVisibility = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalsShown(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span>Chose Conditions</span>

        <div onClick={handleModalsVisibility} className={styles.closeIcon}>
          <CloseIcon />
        </div>
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
              setCurrentData(CONDITIONS);
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
              setCurrentData([]);
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
