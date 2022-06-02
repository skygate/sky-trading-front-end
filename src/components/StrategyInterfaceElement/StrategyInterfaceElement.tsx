import React from "react";
import ConditionButton from "../Buttons/ConditionButton/ConditionButton";
import OpenCloseButton from "../Buttons/OpenCloseButton/OpenCloseButton";
import styles from "./StrategyInterfaceElement.module.scss";
import cx from "classnames";
import AssetsButton from "../Buttons/AssetsButton/AssetsButton";
import AssetsBar from "../AssetsBar/AssetsBar";
import { AddConditionIcon } from "../../assets/icons";

interface ElementsInterface {
  type: string;
  isExpanded?: boolean;
  elements: ElementsInterface[];
}

interface StrategyInterfaceElementProps {
  type: string;
  isExpanded: boolean;
  elements: ElementsInterface[];
  isLastChild: boolean;
}

export enum StrategyInterfaceElements {
  OPEN = "open",
  CLOSE = "close",
  CONDITION = "condition",
  ASSETS = "assets",
  ASSETS_BAR = "assetsBar",
  ADD_CONDITION = "addCondition",
}

const StrategyInterfaceElement = ({
  type,
  elements,
  isLastChild,
  isExpanded,
}: StrategyInterfaceElementProps) => (
  <div
    className={cx(styles.wrapper, styles[`${type}Wrapper`])}
    style={isLastChild ? { borderLeft: "2px solid transparent" } : {}}
  >
    <div className={cx(styles.element, styles[type])}>
      {type === StrategyInterfaceElements.OPEN && (
        <OpenCloseButton isExpanded={isExpanded}>Open</OpenCloseButton>
      )}
      {type === StrategyInterfaceElements.CLOSE && (
        <OpenCloseButton isExpanded={isExpanded}>Close</OpenCloseButton>
      )}
      {type === StrategyInterfaceElements.CONDITION && (
        <ConditionButton isExpanded={isExpanded}>set condition</ConditionButton>
      )}
      {type === StrategyInterfaceElements.ASSETS && (
        <AssetsButton isExpanded={isExpanded} />
      )}
      {type === StrategyInterfaceElements.ASSETS_BAR && <AssetsBar />}
      {type === StrategyInterfaceElements.ADD_CONDITION && <AddConditionIcon />}
    </div>
    {elements &&
      isExpanded &&
      elements.map((item, index, arr) => (
        <StrategyInterfaceElement
          isExpanded={true}
          type={item.type}
          elements={item.elements}
          isLastChild={arr.length - 1 === index}
        />
      ))}
  </div>
);

export default StrategyInterfaceElement;
