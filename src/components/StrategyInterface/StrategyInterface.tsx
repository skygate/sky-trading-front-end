import { useState } from "react";
import StrategyBar from "components/StrategyBar";
import StrategyInterfaceElement from "components/StrategyInterface/StrategyInterfaceElement";
import { useStrategyCreationSelector } from "store/hooks";
import styles from "./StrategyInterface.module.scss";
import { StrategyInterfaceElements } from "constant";

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
            parentType={StrategyInterfaceElements.STRATEGY}
          />
        </div>
      )}
    </>
  );
};

export default StrategyInterface;
