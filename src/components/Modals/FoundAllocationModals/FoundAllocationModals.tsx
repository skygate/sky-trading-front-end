import DarkOverlay from "components/DarkOverlay/DarkOverlay";
import styles from "./FoundAllocationModals.module.scss";
import ChooseFoundAllocationModal from "./ChooseFoundAllocationModal/ChooseFoundAllocationModal";
import FoundAllocationModal, {
  putAllocationId,
} from "./FoundAllocationModal/FoundAllocationModal";
import { DragDropContext, OnDragEndResponder } from "react-beautiful-dnd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AllocationTypes, setAllocation } from "store/allocationSlice";

interface FoundAllocationModalsProps {
  id: string;
}

const FoundAllocationModals = ({ id }: FoundAllocationModalsProps) => {
  const [percentageInputValue, setPercentageInputValue] = useState("");
  const [amountInputValue, setAmountInputValue] = useState("");
  const [sizeInputValue, setSizeInputValue] = useState("");
  const dispatch = useDispatch();

  const handleOnDragEnd: OnDragEndResponder = (result) => {
    const type = result.draggableId as AllocationTypes;
    console.log(result);
    const switchValue = {
      [AllocationTypes.AMOUNT]: amountInputValue,
      [AllocationTypes.PERCENT]: percentageInputValue,
      [AllocationTypes.SIZE]: sizeInputValue,
      [AllocationTypes.CAPITAL]: null,
    };

    if (result.destination?.droppableId === putAllocationId) {
      dispatch(
        setAllocation({
          id,
          type,
          value: switchValue[type],
          submitted: false,
        })
      );
    }
  };
  return (
    <>
      <div className={styles.wrapper}>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <FoundAllocationModal id={id} />
          <ChooseFoundAllocationModal
            id={id}
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
