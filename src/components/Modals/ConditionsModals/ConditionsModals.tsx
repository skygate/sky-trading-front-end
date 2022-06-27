import { useEffect, useState } from "react";
import styles from "./ConditionsModals.module.scss";
import SetConditionsModal from "components/Modals/SetConditionsModal";
import ChooseConditionsModal from "components/Modals/ChooseConditionsModal";
import { DragDropContext, OnDragEndResponder } from "react-beautiful-dnd";
import {
  ConditionTypes,
  setConditionDroppableElements,
} from "constant/conditions";
import { findCondition } from "helpers/findCondition";
import { useAppDispatch, useConditionsSelector } from "store/hooks";
import { updateConditionAction } from "store/conditionsSlice";
import { SetConditionsInterface } from "components/Modals/SetConditionsModal/types";

interface ConditionsModalsProps {
  id: string;
}

const ConditionsModals = ({ id }: ConditionsModalsProps) => {
  const [conditions, setConditions] = useState<SetConditionsInterface>({
    if: [null, null, null],
    then: null,
    chart: null,
    interval: null,
  });

  const dispatch = useAppDispatch();
  const globalConditions = useConditionsSelector(id);

  useEffect(() => {
    if (globalConditions) setConditions(globalConditions.details);
  }, [globalConditions]);

  const handleOnDragEnd: OnDragEndResponder = (result) => {
    const dragableElementId = result.draggableId;
    const dropType = result.destination?.droppableId;
    const foundCondition = findCondition(dragableElementId);
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
      updateConditionAction({
        id: id,
        details: temp,
      })
    );
  };

  return (
    <div className={styles.modalsWrapper}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <SetConditionsModal conditions={conditions} id={id} />
        <ChooseConditionsModal id={id} />
      </DragDropContext>
    </div>
  );
};

export default ConditionsModals;
