import React from "react";
import styles from "./FoundAllocationModal.module.scss";
import { CloseIcon } from "assets/icons";
import DragBox from "components/DargBox/DragBox";
import ToggleButton from "components/Common/ToggleButton/ToggleButton";
import DoneButton from "components/Buttons/DoneButton/DoneButton";
import { useCloseModal } from "store/hooks";

interface FoundAllocationModalProps {
  id: string;
}

const FoundAllocationModal = ({ id }: FoundAllocationModalProps) => {
  const closeModal = useCloseModal(id);

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
        <DragBox />
      </div>
      <div className={styles.optimize}>
        Optimize
        <ToggleButton isToggleActive />
      </div>
      <div className={styles.button}>
        <DoneButton onClick={closeModal} />
      </div>
    </div>
  );
};

export default FoundAllocationModal;
