import { Dispatch, SetStateAction, useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { AllocationTypes } from "store/allocationSlice";
import { useCloseModal } from "store/hooks";
import { CloseIcon } from "../../../../assets/icons";
import TinyInput from "../../../Common/TinyInput/TinyInput";
import styles from "./ChooseFoundAllocationModal.module.scss";

interface ChooseFoundAllocationModalProps {
  id: string;
  percentageInputValue: string;
  setPercentageInputValue: Dispatch<SetStateAction<string>>;
  amountInputValue: string;
  setAmountInputValue: Dispatch<SetStateAction<string>>;
  sizeInputValue: string;
  setSizeInputValue: Dispatch<SetStateAction<string>>;
}

const ChooseFoundAllocationModal = ({
  id,
  percentageInputValue,
  setPercentageInputValue,
  amountInputValue,
  setAmountInputValue,
  sizeInputValue,
  setSizeInputValue,
}: ChooseFoundAllocationModalProps) => {
  const [percent, setPercent] = useState("");
  const [amount, setAmount] = useState("");
  const [size, setSize] = useState("");
  const closeModal = useCloseModal(id);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        Choose found allocation
        <div className={styles.closeWrapper} onClick={closeModal}>
          <CloseIcon />
        </div>
      </div>
      <Droppable droppableId="chooseAllocation">
        {(provided) => (
          <div
            className={styles.list}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <Draggable draggableId={AllocationTypes.PERCENT} index={0}>
              {(provided) => (
                <div
                  className={styles.listElement}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  %
                  <TinyInput
                    value={percent}
                    setValue={setPercent}
                    maxLength={2}
                  />
                </div>
              )}
            </Draggable>
            <Draggable draggableId={AllocationTypes.AMOUNT} index={1}>
              {(provided) => (
                <div
                  className={styles.listElement}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  Amount
                  <TinyInput value={amount} setValue={setAmount} />
                </div>
              )}
            </Draggable>
            <Draggable draggableId={AllocationTypes.SIZE} index={2}>
              {(provided) => (
                <div
                  className={styles.listElement}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  Size
                  <TinyInput value={size} setValue={setSize} />
                </div>
              )}
            </Draggable>
            <Draggable draggableId={AllocationTypes.CAPITAL} index={3}>
              {(provided) => (
                <div
                  className={styles.listElement}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  Capital
                </div>
              )}
            </Draggable>
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default ChooseFoundAllocationModal;
