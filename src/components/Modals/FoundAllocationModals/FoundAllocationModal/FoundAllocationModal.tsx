import React from "react";
import styles from "./FoundAllocationModal.module.scss";
import { CloseIcon } from "assets/icons";
import DragBox from "components/DargBox/DragBox";
import ToggleButton from "components/Common/ToggleButton/ToggleButton";
import DoneButton from "components/Buttons/DoneButton";
import { useAllocationSelector, useCloseModal } from "store/hooks";
import { Droppable } from "react-beautiful-dnd";
import { formatAllocationType } from "helpers/formatAllocationType";
import { useDispatch } from "react-redux";
import { submitAllocationAction } from "store/allocationSlice";

interface FoundAllocationModalProps {
  id: string;
}

export const putAllocationId = "putAllocation";

const FoundAllocationModal = ({ id }: FoundAllocationModalProps) => {
  const closeModal = useCloseModal(id);
  const allocation = useAllocationSelector(id);
  const dispatch = useDispatch();

  const handleSubmitAllocation = () => {
    dispatch(submitAllocationAction(id));
    closeModal();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        Found Allocation
        <div className={styles.closeWrapper} onClick={closeModal}>
          <CloseIcon />
        </div>
      </div>
      <div className={styles.type}>
        type
        <Droppable droppableId={putAllocationId}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {allocation?.type ? (
                <div className={styles.droppedElement}>
                  {formatAllocationType(allocation.type, allocation.value)}
                </div>
              ) : (
                <DragBox />
              )}
            </div>
          )}
        </Droppable>
      </div>
      <div className={styles.optimize}>
        Optimize
        <ToggleButton isToggleActive />
      </div>
      <div className={styles.button}>
        <DoneButton
          active={!!allocation?.type}
          onClick={handleSubmitAllocation}
        />
      </div>
    </div>
  );
};

export default FoundAllocationModal;
