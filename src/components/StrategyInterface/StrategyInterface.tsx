import React, { useState } from "react";
import StrategyBar from "components/StrategyBar/StrategyBar";
import StrategyInterfaceElement from "components/StrategyInterface/StrategyInterfaceElement/StrategyInterfaceElement";
import { useStrategyCreationSelector } from "store/hooks";
import styles from "./StrategyInterface.module.scss";

const StrategyInterface = () => {
  const [isStrategyExpanded, setStrategyExpanded] = useState(false);
  const strategyState = useStrategyCreationSelector();

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
            id={strategyState.id}
            isExpanded={strategyState.isExpanded}
            type={strategyState.type}
            elements={strategyState.elements}
            isLastChild={true}
          />
        </div>
      )}
    </>
  );
};

export default StrategyInterface;
