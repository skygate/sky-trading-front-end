import React from "react";
import ConditionButton from "../Buttons/ConditionButton/ConditionButton";
import OpenCloseButton from "../Buttons/OpenCloseButton/OpenCloseButton";
import styles from "./StrategyInterfaceElement.module.scss";
import cx from "classnames";
import AssetsButton from "../Buttons/AssetsButton/AssetsButton";
import AssetsBar from "../AssetsBar/AssetsBar";
import { AddConditionIcon } from "../../assets/icons";
import { useAppDispatch } from "../../store/hooks";
import { expandItem } from "../../store/strategyCreationSlice";
import { StrategyInterfaceElements } from "../../constant";

interface ElementsInterface {
  id: string;
  type: StrategyInterfaceElements;
  isExpanded: boolean;
  elements: ElementsInterface[];
}

interface StrategyInterfaceElementProps {
  id: string;
  type: StrategyInterfaceElements;
  isExpanded: boolean;
  elements: ElementsInterface[];
  isLastChild: boolean;
}

const StrategyInterfaceElement = ({
  id,
  type,
  elements,
  isLastChild,
  isExpanded,
}: StrategyInterfaceElementProps) => {
  const dispatch = useAppDispatch();

  const handleExpansion = () => {
    dispatch(expandItem(id));
  };

  return (
    <div
      className={cx(styles.wrapper, styles[`${type}Wrapper`])}
      style={isLastChild ? { borderLeft: "2px solid transparent" } : {}}
    >
      <div
        className={cx(styles.element, styles[type])}
        onClick={handleExpansion}
      >
        {type === StrategyInterfaceElements.OPEN && (
          <OpenCloseButton isExpanded={isExpanded}>Open</OpenCloseButton>
        )}
        {type === StrategyInterfaceElements.CLOSE && (
          <OpenCloseButton isExpanded={isExpanded}>Close</OpenCloseButton>
        )}
        {type === StrategyInterfaceElements.CONDITION && (
          <ConditionButton isExpanded={isExpanded}>
            set condition
          </ConditionButton>
        )}
        {type === StrategyInterfaceElements.ASSETS && (
          <AssetsButton isExpanded={isExpanded} />
        )}
        {type === StrategyInterfaceElements.ASSETS_BAR && <AssetsBar />}
        {type === StrategyInterfaceElements.ADD_CONDITION && (
          <AddConditionIcon />
        )}
      </div>
      {elements &&
        isExpanded &&
        elements.map((item, index, arr) => (
          <StrategyInterfaceElement
            key={item.id}
            id={item.id}
            isExpanded={item.isExpanded}
            type={item.type}
            elements={item.elements}
            isLastChild={arr.length - 1 === index}
          />
        ))}
    </div>
  );
};

export default StrategyInterfaceElement;
