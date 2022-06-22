import React, { useState } from "react";
import { useCloseModal } from "store/hooks";
import { CloseIcon } from "../../../../assets/icons";
import TinyInput from "../../../Common/TinyInput/TinyInput";
import styles from "./ChooseFoundAllocationModal.module.scss";

interface ChooseFoundAllocationModalProps {
  id: string;
}

const ChooseFoundAllocationModal = ({
  id,
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
      <div className={styles.list}>
        <div className={styles.listElement}>
          %<TinyInput value={percent} setValue={setPercent} maxLength={2} />
        </div>
        <div className={styles.listElement}>
          Amount
          <TinyInput value={amount} setValue={setAmount} />
        </div>
        <div className={styles.listElement}>
          Size
          <TinyInput value={size} setValue={setSize} />
        </div>
        <div className={styles.listElement}>Capital</div>
      </div>
    </div>
  );
};

export default ChooseFoundAllocationModal;
