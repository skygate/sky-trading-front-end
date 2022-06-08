import ConditionButton from "components/Buttons/ConditionButton/ConditionButton";
import OpenCloseButton from "components/Buttons/OpenCloseButton/OpenCloseButton";
import styles from "./StrategyInterfaceElement.module.scss";
import cx from "classnames";
import AssetsButton from "components/Buttons/AssetsButton/AssetsButton";
import AssetsBar from "components/AssetsBar/AssetsBar";
import { AddConditionIcon } from "assets/icons";
import { useAppDispatch } from "store/hooks";
import { expandItem } from "store/strategyCreationSlice";
import { StrategyInterfaceElements } from "constant";

interface ElementsInterface {
  id: string;
  type: StrategyInterfaceElements;
  isExpanded: boolean;
  elements: ElementsInterface[];
}

interface StrategyInterfaceElementProps extends ElementsInterface {
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

  const renderItem = () => {
    switch (type) {
      case StrategyInterfaceElements.OPEN:
        return (
          <OpenCloseButton isExpanded={isExpanded} onClick={handleExpansion}>
            Open
          </OpenCloseButton>
        );
      case StrategyInterfaceElements.CLOSE:
        return (
          <OpenCloseButton isExpanded={isExpanded} onClick={handleExpansion}>
            Close
          </OpenCloseButton>
        );
      case StrategyInterfaceElements.CONDITION:
        return (
          <ConditionButton isExpanded={isExpanded} onClick={handleExpansion}>
            set condition
          </ConditionButton>
        );
      case StrategyInterfaceElements.ASSETS:
        return (
          <AssetsButton isExpanded={isExpanded} onClick={handleExpansion} />
        );
      case StrategyInterfaceElements.ASSETS_BAR:
        return <AssetsBar />;
      case StrategyInterfaceElements.ADD_CONDITION:
        return <AddConditionIcon />;
    }
  };

  return (
    <div
      className={cx(styles.wrapper, styles[`${type}Wrapper`])}
      style={isLastChild ? { borderLeft: "2px solid transparent" } : {}}
    >
      <div className={cx(styles.element, styles[type])}>{renderItem()}</div>
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
