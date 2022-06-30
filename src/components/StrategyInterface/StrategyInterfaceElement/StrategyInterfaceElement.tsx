import ConditionButton from "components/Buttons/ConditionButton";
import OpenCloseButton from "components/Buttons/OpenCloseButton";
import styles from "./StrategyInterfaceElement.module.scss";
import cx from "classnames";
import AssetsButton from "components/Buttons/AssetsButton";
import AssetsBar from "components/AssetsBar";
import { useAppDispatch } from "store/hooks";
import { expandStrategyItemAction } from "store/strategyCreationSlice";
import { StrategyInterfaceElements } from "constant";
import AllocationButton from "components/Buttons/AllocationButton";
import AddConditionButton from "components/Buttons/AddConditionButton/AddConditionButton";

interface ElementsInterface {
  id: string;
  type: StrategyInterfaceElements;
  isExpanded: boolean;
  text?: string;
  elements: ElementsInterface[];
  parentId?: string;
  parentType?: StrategyInterfaceElements;
}

const StrategyInterfaceElement = ({
  id,
  type,
  elements,
  isExpanded,
  text,
  parentId,
  parentType,
}: ElementsInterface) => {
  const dispatch = useAppDispatch();

  const handleExpansion = () => {
    dispatch(expandStrategyItemAction(id));
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
          <ConditionButton
            isExpanded={isExpanded}
            onClick={handleExpansion}
            id={id}
            text={text}
          >
            {text || "set condition"}
          </ConditionButton>
        );
      case StrategyInterfaceElements.ASSETS:
        return (
          <AssetsButton isExpanded={isExpanded} onClick={handleExpansion} />
        );
      case StrategyInterfaceElements.ASSETS_BAR:
        return <AssetsBar id={id} parentId={parentId} />;
      case StrategyInterfaceElements.ADD_CONDITION:
        return <AddConditionButton parentId={parentId} />;
      case StrategyInterfaceElements.ALLOCATION:
        return <AllocationButton id={id} />;
    }
  };

  return (
    <div className={cx(styles.wrapper, styles[`${parentType}Wrapper`])}>
      <div className={cx(styles.element, parentType && styles[parentType])}>
        {renderItem()}
      </div>
      {elements &&
        isExpanded &&
        elements.map((item) => (
          <StrategyInterfaceElement
            key={item.id}
            id={item.id}
            isExpanded={item.isExpanded}
            type={item.type}
            text={item.text}
            elements={item.elements}
            parentId={id}
            parentType={type}
          />
        ))}
    </div>
  );
};

export default StrategyInterfaceElement;
