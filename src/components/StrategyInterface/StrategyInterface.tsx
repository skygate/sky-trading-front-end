import React, { useState } from "react";
import StrategyBar from "../../components/StrategyBar/StrategyBar";
import StrategyInterfaceElement from "../../components/StrategyInterface/StrategyInterfaceElement/StrategyInterfaceElement";
import { useAppSelector } from "../../store/hooks";
import styles from "./StrategyInterface.module.scss";

const StrategyInterface = () => {
  const [isStrategyExpanded, setStrategyExpanded] = useState(false);
  const strategyCrationState = useAppSelector(
    (state) => state.strategyCreation
  );
  return (
    <>
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
    </>
  );
};

export default StrategyInterface;
