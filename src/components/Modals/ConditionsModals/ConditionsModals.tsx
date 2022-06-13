import React, { useEffect, useState } from "react";
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
import { useAppDispatch, useConditionsSelector } from "store/hooks";
import { updateCondition } from "store/conditionsSlice";

interface ConditionsModalsProps {
  elementId: string;
}

export interface SetConditionsInterface {
  [index: string]: any;
  if: (null | ConditionInterface)[];
  then: null | ConditionInterface;
  chart: null | ConditionInterface;
  interval: null | ConditionInterface;
}

const ConditionsModals = ({ elementId }: ConditionsModalsProps) => {
  const [conditions, setConditions] = useState<SetConditionsInterface>({
    if: [null, null, null],
    then: null,
    chart: null,
    interval: null,
  });

  const dispatch = useAppDispatch();
  const globalConditions = useConditionsSelector(elementId);

  useEffect(() => {
    if (globalConditions) setConditions(globalConditions.details);
  }, [globalConditions]);

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
    dispatch(
      updateCondition({
        id: elementId,
        details: temp,
        optimize: false,
      })
    );
  };

  return (
    <div className={styles.modalsWrapper}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <SetConditionsModal conditions={conditions} id={elementId} />
        <ChooseConditionsModal id={elementId} />
      </DragDropContext>
    </div>
  );
};

export default ConditionsModals;
