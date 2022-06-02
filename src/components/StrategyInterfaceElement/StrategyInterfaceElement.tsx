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
      {type === "open" && (
        <OpenCloseButton isExpanded={isExpanded}>Open</OpenCloseButton>
      )}
      {type === "close" && (
        <OpenCloseButton isExpanded={isExpanded}>Close</OpenCloseButton>
      )}
      {type === "condition" && (
        <ConditionButton isExpanded={isExpanded}>set condition</ConditionButton>
      )}
      {type === "assets" && <AssetsButton isExpanded={isExpanded} />}
      {type === "assetsBar" && <AssetsBar />}
      {type === "addCondition" && <AddConditionIcon />}
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
