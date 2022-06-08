import React, { useState } from "react";
import styles from "./ConditionsModals.module.scss";
import SetConditionsModal from "components/Modals/SetConditionsModal/SetConditionsModal";
import ChooseConditionsModal from "components/Modals/ChooseConditionsModal/ChooseConditionsModal";
import { DragDropContext, OnDragEndResponder } from "react-beautiful-dnd";
import {
  ConditionInterface,
  ConditionTypes,
  setConditionDroppableElements,
} from "constant/conditions";
import { findCondition } from "helpers/findCondition";

interface ConditionsModalsProps {
  setModalsShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SetConditionsInterface {
  [index: string]: any;
  if: (null | ConditionInterface)[];
  then: null | ConditionInterface;
  chart: null | ConditionInterface;
  interval: null | ConditionInterface;
}

const ConditionsModals = ({ setModalsShown }: ConditionsModalsProps) => {
  const [conditions, setConditions] = useState<SetConditionsInterface>({
    if: [null, null, null],
    then: null,
    chart: null,
    interval: null,
  });

  const handleOnDragEnd: OnDragEndResponder = (result) => {
    const id = result.draggableId;
    const dropType = result.destination?.droppableId;
    const foundCondition = findCondition(id);
    if (!foundCondition) return;

    const temp = { ...conditions };

    switch (dropType) {
      case setConditionDroppableElements.IF_2:
        if (foundCondition.type === ConditionTypes.INDICATORS)
          temp.if = [temp.if[0], temp.if[1], foundCondition];
        break;

      case setConditionDroppableElements.CHART:
        if (foundCondition.type === ConditionTypes.CHART)
          temp.chart = foundCondition;
        break;
    }

    setConditions(temp);
  };

  return (
    <div className={styles.modalsWrapper}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <SetConditionsModal
          setModalsShown={setModalsShown}
          conditions={conditions}
        />
        <ChooseConditionsModal setModalsShown={setModalsShown} />
      </DragDropContext>
    </div>
  );
};

export default ConditionsModals;
