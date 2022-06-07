import React from "react";
import { CloseIcon } from "assets/icons";
import ToggleButton from "components/Common/ToggleButton/ToggleButton";
import DragBox from "components/DargBox/DragBox";
import DoneButton from "components/Buttons/DoneButton/DoneButton";
import styles from "./SetConditionsModal.module.scss";
import { Droppable } from "react-beautiful-dnd";
import { SetConditionsInterface } from "components/Buttons/ConditionButton/ConditionsModals/ConditionsModals";
import Condition from "components/Condition/Condition";
import { setConditionDroppableElements } from "constant/conditions";

interface SetConditionsModalProps {
  setModalsShown: React.Dispatch<React.SetStateAction<boolean>>;
  conditions: SetConditionsInterface;
}

const SetConditionsModal = ({
  setModalsShown,
  conditions,
}: SetConditionsModalProps) => {
  const handleModalsVisibility = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalsShown(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.sectionSpace}>
        Set conditions
        <div className={styles.close} onClick={handleModalsVisibility}>
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
                {item ? (
                  <Condition condition={item} />
                ) : (
                  <DragBox key={index} />
                )}
              </div>
            )}
          </Droppable>
        ))}
      </div>
      <div className={styles.sectionStart}>
        then open
        <Droppable droppableId={setConditionDroppableElements.THEN}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {conditions.then ? (
                <div className={styles.conditionElement}>
                  {conditions.then ? (
                    <Condition condition={conditions.then} />
                  ) : (
                    <DragBox />
                  )}
                </div>
              ) : (
                <DragBox />
              )}
            </div>
          )}
        </Droppable>
      </div>
      <div className={styles.sectionSpace}>
        Optimize
        <ToggleButton isToggleActive />
      </div>
      <div
        className={styles.sectionStart}
        style={{ fontSize: "var(--font-12)" }}
      >
        Filters
      </div>
      <div className={styles.sectionStart}>
        chart type
        <Droppable droppableId={setConditionDroppableElements.CHART}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {conditions.chart ? (
                <div className={styles.conditionElement}>
                  {conditions.chart ? (
                    <Condition condition={conditions.chart} />
                  ) : (
                    <DragBox />
                  )}
                </div>
              ) : (
                <DragBox />
              )}
            </div>
          )}
        </Droppable>
      </div>
      <div className={styles.sectionStart}>
        interval
        <Droppable droppableId={setConditionDroppableElements.INTERVAL}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {conditions.interval ? (
                  <div className={styles.conditionElement}>
                    {conditions.interval ? (
                      <Condition condition={conditions.interval} />
                    ) : (
                      <DragBox />
                    )}
                  </div>
                ) : (
                  <DragBox />
                )}
              </div>
            </div>
          )}
        </Droppable>
      </div>
      <div style={{ alignSelf: "flex-end" }}>
        <DoneButton onClick={() => {}} active />
      </div>
    </div>
  );
};

export default SetConditionsModal;
