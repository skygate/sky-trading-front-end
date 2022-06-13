import React, { useState } from "react";
import { ChartIcon, CloseIcon, RecipeIcon, UserIcon } from "assets/icons";
import SearchInput from "components/Common/SearchInput/SearchInput";
import styles from "./ChooseConditionsModal.module.scss";
import cx from "classnames";
import ConditionsGrid from "./ConditionsGrid/ConditionsGrid";
import { CONDITIONS, ConditionsType } from "constant/conditions";
import { useCloseModal } from "store/hooks";

enum chosenModalOptions {
  SCRIPTS = "scripts",
  TECHNICALS = "technicals",
  FINANCIALS = "financials",
}

interface SetConditionsModalProps {
  id: string;
}

const ChooseConditionsModal = ({ id }: SetConditionsModalProps) => {
  const hideModal = useCloseModal(id);
  const [activeOption, setActiveOption] = useState(
    chosenModalOptions.TECHNICALS
  );
  const [currentData, setCurrentData] = useState<ConditionsType>(CONDITIONS);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span>Chose Conditions</span>

        <div
          onClick={(e) => {
            e.stopPropagation();
            hideModal();
          }}
          className={styles.closeIcon}
        >
          <CloseIcon />
        </div>
      </div>
      <SearchInput placeholder="Search for conditions" />
      <div className={styles.bodyWrapper}>
        <div className={styles.sidebar}>
          <div
            className={cx(
              styles.sidebarElement,
              activeOption === chosenModalOptions.SCRIPTS && styles.active
            )}
            onClick={() => {
              setActiveOption(chosenModalOptions.SCRIPTS);
              setCurrentData([]);
            }}
          >
            <UserIcon />
            My scripts
          </div>
          <div
            className={cx(
              styles.sidebarElement,
              activeOption === chosenModalOptions.TECHNICALS && styles.active
            )}
            onClick={() => {
              setActiveOption(chosenModalOptions.TECHNICALS);
              setCurrentData(CONDITIONS);
            }}
          >
            <ChartIcon /> Technicals
          </div>
          <div
            className={cx(
              styles.sidebarElement,
              activeOption === chosenModalOptions.FINANCIALS && styles.active
            )}
            onClick={() => {
              setActiveOption(chosenModalOptions.FINANCIALS);
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
