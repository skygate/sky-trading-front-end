import React, { useState } from "react";
import { CloseIcon } from "../../../../assets/icons";
import TinyInput from "../../../Common/TinyInput/TinyInput";
import styles from "./ChooseFoundAllocationModal.module.scss";

const ChooseFoundAllocationModal = () => {
  const [percent, setPercent] = useState("");
  const [amount, setAmount] = useState("");
  const [size, setSize] = useState("");

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        Choose found allocation
        <CloseIcon />
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
