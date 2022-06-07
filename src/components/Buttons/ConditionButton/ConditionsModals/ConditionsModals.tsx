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

    if (
      foundCondition &&
      foundCondition.type === ConditionTypes.INDICATORS &&
      dropType === setConditionDroppableElements.IF_2
    ) {
      setConditions((prev) => ({
        ...prev,
        if: [prev.if[0], prev.if[1], foundCondition],
      }));
    }

    if (
      foundCondition &&
      foundCondition.type === ConditionTypes.CHART &&
      dropType === setConditionDroppableElements.CHART
    ) {
      setConditions((prev) => ({
        ...prev,
        chart: foundCondition,
      }));
    }
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
