import React from "react";
import { CloseIcon } from "assets/icons";
import ToggleButton from "components/Common/ToggleButton/ToggleButton";
import DragBox from "components/DargBox/DragBox";
import DoneButton from "components/Buttons/DoneButton/DoneButton";
import styles from "./SetConditionsModal.module.scss";
import { Droppable } from "react-beautiful-dnd";
import { SetConditionsInterface } from "components/Modals/ConditionsModals/ConditionsModals";
import Condition from "components/Condition/Condition";
import { setConditionDroppableElements } from "constant/conditions";
import { useCloseModal } from "store/hooks";

interface SetConditionsModalProps {
  conditions: SetConditionsInterface;
  id: string;
}

const SetConditionsModal = ({ conditions, id }: SetConditionsModalProps) => {
  const hideModal = useCloseModal(id);
  const renderDragPlace = (type: setConditionDroppableElements) => (
    <Droppable droppableId={type}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {conditions[type] ? (
            <Condition condition={conditions[type]} />
          ) : (
            <DragBox />
          )}
        </div>
      )}
    </Droppable>
  );

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
        {conditions.if.map((item, index) => (
          <Droppable droppableId={`if_${index}`} key={index}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={styles.dropList}
              >
                {item ? <Condition condition={item} /> : <DragBox />}
              </div>
            )}
          </Droppable>
        ))}
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
        <DoneButton onClick={hideModal} active />
      </div>
    </div>
  );
};

export default SetConditionsModal;
