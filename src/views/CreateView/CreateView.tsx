import React, { useState } from "react";
import Calculate from "../../components/Calculate/Calculate";
import DetailsDropDown from "../../components/SideBar/DetailsDropDown/DetailsDropDown";
import OptimizeDropDown from "../../components/SideBar/OptimizeDropDown/OptimizeDropDown";
import StrategyBar from "../../components/StrategyBar/StrategyBar";
import StrategyInterfaceElement from "../../components/StrategyInterfaceElement/StrategyInterfaceElement";
import TestPreview from "../../components/TestPreview/TestPreview";
import ToolsBar from "../../components/ToolsBar/ToolsBar";
import { useAppSelector } from "../../store/hooks";
import styles from "./CreateView.module.scss";

function CreateView() {
  const [isStrategyExpanded, setStrategyExpanded] = useState(false);
  const strategyCrationState = useAppSelector(
    (state) => state.strategyCreation
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSidebar}>
        <DetailsDropDown />
        <OptimizeDropDown />
        <Calculate />
      </div>

      <div className={styles.content}>
        <div
          className={styles.strategyBarWrapper}
          onClick={() => setStrategyExpanded((prev) => !prev)}
        >
          <StrategyBar isExpanded={isStrategyExpanded} />
        </div>
        {isStrategyExpanded && (
          <div className={styles.strategyWrapper}>
            <StrategyInterfaceElement
              id={strategyCrationState.id}
              isExpanded={strategyCrationState.isExpanded}
              type={strategyCrationState.type}
              elements={strategyCrationState.elements}
              isLastChild={true}
            />
          </div>
        )}
      </div>

      <div className={styles.rightSidebar}>
        <ToolsBar />
        <TestPreview />
      </div>
    </div>
  );
}

export default CreateView;
