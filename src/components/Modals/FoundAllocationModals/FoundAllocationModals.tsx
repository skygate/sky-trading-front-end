import DarkOverlay from "components/DarkOverlay";
import styles from "./FoundAllocationModals.module.scss";
import ChooseFoundAllocationModal from "./ChooseFoundAllocationModal";
import FoundAllocationModal, { putAllocationId } from "./FoundAllocationModal";
import { DragDropContext, OnDragEndResponder } from "react-beautiful-dnd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  AllocationTypes,
  updateAllocationAction,
} from "store/strategyCreationSlice";

const FoundAllocationModals = () => {
  const [percentageInputValue, setPercentageInputValue] = useState("");
  const [amountInputValue, setAmountInputValue] = useState("");
  const [sizeInputValue, setSizeInputValue] = useState("");
  const dispatch = useDispatch();

  const handleOnDragEnd: OnDragEndResponder = (result) => {
    const type = result.draggableId as AllocationTypes;
    let isValueValid = true;

    const switchValue = {
      [AllocationTypes.AMOUNT]: amountInputValue,
      [AllocationTypes.PERCENT]: percentageInputValue,
      [AllocationTypes.SIZE]: sizeInputValue,
      [AllocationTypes.CAPITAL]: null,
    };

    if (type !== AllocationTypes.CAPITAL && !parseFloat(switchValue[type]))
      isValueValid = false;
    if (result.destination?.droppableId === putAllocationId && isValueValid) {
      dispatch(
        updateAllocationAction({
          submitted: false,
          type,
          value: switchValue[type],
        })
      );
    }
  };
  return (
    <>
      <div className={styles.wrapper}>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <FoundAllocationModal />
          <ChooseFoundAllocationModal
            percentageInputValue={percentageInputValue}
            setPercentageInputValue={setPercentageInputValue}
            amountInputValue={amountInputValue}
            setAmountInputValue={setAmountInputValue}
            sizeInputValue={sizeInputValue}
            setSizeInputValue={setSizeInputValue}
          />
        </DragDropContext>
      </div>
      <DarkOverlay modal />
    </>
  );
};

export default FoundAllocationModals;
