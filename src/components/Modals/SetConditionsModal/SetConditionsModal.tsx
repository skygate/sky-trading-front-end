import { CloseIcon } from "assets/icons";
import ToggleButton from "components/Common/ToggleButton/ToggleButton";
import DragBox from "components/DargBox/DragBox";
import DoneButton from "components/Buttons/DoneButton/DoneButton";
import styles from "./SetConditionsModal.module.scss";
import { Droppable } from "react-beautiful-dnd";
import Condition from "components/Condition/Condition";
import { setConditionDroppableElements } from "types/ConditionTypes";
import { useCloseModal } from "store/hooks";
import { ConditionDetailsInterface } from "types/ConditionTypes";
import { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { updateStrategyElementAction } from "store/strategyCreationSlice";

interface SetConditionsModalProps {
  conditions: ConditionDetailsInterface;
  id: string;
  setEmaValue: Dispatch<SetStateAction<string>>;
  emaValue: string;
  setSmaValue: Dispatch<SetStateAction<string>>;
  smaValue: string;
  isAllPlacesFill: boolean;
}

const SetConditionsModal = ({
  conditions,
  id,
  setEmaValue,
  setSmaValue,
  emaValue,
  smaValue,
  isAllPlacesFill,
}: SetConditionsModalProps) => {
  const hideModal = useCloseModal(id);
  const dispatch = useDispatch();

  const renderDragPlace = (type: setConditionDroppableElements) => {
    const conditionByType = conditions[type];
    return (
      <Droppable droppableId={type}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {conditionByType ? (
              <Condition
                condition={conditionByType}
                setEmaValue={setEmaValue}
                setSmaValue={setSmaValue}
                emaValue={emaValue}
                smaValue={smaValue}
              />
            ) : (
              <DragBox />
            )}
          </div>
        )}
      </Droppable>
    );
  };

  const handleSubmitCondition = () => {
    if (isAllPlacesFill) {
      dispatch(
        updateStrategyElementAction({
          id: id,
          key: "text",
          value: [
            conditions.if_0?.name,
            conditions.if_1?.name,
            conditions.if_2?.name,
          ].join(" "),
        })
      );
      hideModal();
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.sectionSpace}>
        Set conditions
        <div
          className={styles.close}
          onClick={(e) => {
            e.stopPropagation();
            hideModal();
          }}
        >
          <CloseIcon />
        </div>
      </div>
      <div className={styles.sectionStart}>
        if
        {renderDragPlace(setConditionDroppableElements.IF_0)}
        {renderDragPlace(setConditionDroppableElements.IF_1)}
        {renderDragPlace(setConditionDroppableElements.IF_2)}
      </div>
      <div className={styles.sectionStart}>
        then open
        {renderDragPlace(setConditionDroppableElements.THEN)}
      </div>
      <div className={styles.sectionSpace}>
        Optimize
        <ToggleButton isToggleActive />
      </div>
      <div className={styles.sectionStartFilter}>Filters</div>
      <div className={styles.sectionStart}>
        chart type
        {renderDragPlace(setConditionDroppableElements.CHART)}
      </div>
      <div className={styles.sectionStart}>
        interval
        {renderDragPlace(setConditionDroppableElements.INTERVAL)}
      </div>
      <div className={styles.buttonWrapper}>
        <DoneButton onClick={handleSubmitCondition} active={isAllPlacesFill} />
      </div>
    </div>
  );
};

export default SetConditionsModal;
