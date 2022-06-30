import { useEffect, useState } from "react";
import styles from "./ConditionsModals.module.scss";
import SetConditionsModal from "components/Modals/SetConditionsModal";
import ChooseConditionsModal from "components/Modals/ChooseConditionsModal";
import { DragDropContext, OnDragEndResponder } from "react-beautiful-dnd";
import { setConditionDroppableElements } from "types/ConditionTypes";
import { findCondition } from "helpers/findCondition";
import { useAppDispatch, useConditionsSelector } from "store/hooks";
import {
  setIndicatorAction,
  updateConditionAction,
} from "store/conditionsSlice";
import {
  ConditionTypes,
  ConditionDetailsInterface,
} from "types/ConditionTypes";

interface ConditionsModalsProps {
  id: string;
}

const ConditionsModals = ({ id }: ConditionsModalsProps) => {
  const [isAllPlacesFill, setAllPlacesFill] = useState(false);
  const [conditions, setConditions] = useState<ConditionDetailsInterface>({
    if_0: null,
    if_1: null,
    if_2: null,
    then: null,
    chart: null,
    interval: null,
  });

  const dispatch = useAppDispatch();
  const globalConditions = useConditionsSelector(id);

  useEffect(() => {
    if (globalConditions) setConditions(globalConditions.details);
  }, [globalConditions]);

  const CheckIsAllPlacesFill = (obj: ConditionDetailsInterface) => {
    for (const key in obj) {
      if (!obj[key]) return false;
    }
    return true;
  };

  useEffect(() => {
    setAllPlacesFill(CheckIsAllPlacesFill(conditions));
  }, [conditions]);

  const handleOnDragEnd: OnDragEndResponder = (result) => {
    const dragableElementId = result.draggableId;
    const dropType = result.destination?.droppableId;
    const foundCondition = findCondition(dragableElementId);
    if (!foundCondition) return;

    const temp = { ...conditions };

    switch (dropType) {
      case setConditionDroppableElements.IF_0:
        if (foundCondition.type === ConditionTypes.PRICE_OPERATOR)
          temp.if_0 = foundCondition;
        break;
      case setConditionDroppableElements.IF_1:
        if (foundCondition.type === ConditionTypes.CONDITION_OPERATOR)
          temp.if_1 = foundCondition;
        break;
      case setConditionDroppableElements.IF_2:
        if (foundCondition.type === ConditionTypes.INDICATORS)
          temp.if_2 = foundCondition;
        dispatch(
          setIndicatorAction({
            id,
            value: foundCondition.name,
          })
        );
        break;
      case setConditionDroppableElements.THEN:
        if (foundCondition.type === ConditionTypes.THEN_OPERATOR)
          temp.then = foundCondition;
        break;
      case setConditionDroppableElements.CHART:
        if (foundCondition.type === ConditionTypes.CHART)
          temp.chart = foundCondition;
        break;
      case setConditionDroppableElements.INTERVAL:
        if (foundCondition.type === ConditionTypes.INTERVAL)
          temp.interval = foundCondition;
        break;
    }

    setAllPlacesFill(CheckIsAllPlacesFill(temp));

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
        <SetConditionsModal
          conditions={conditions}
          id={id}
          isAllPlacesFill={isAllPlacesFill}
        />
        <ChooseConditionsModal id={id} />
      </DragDropContext>
    </div>
  );
};

export default ConditionsModals;
