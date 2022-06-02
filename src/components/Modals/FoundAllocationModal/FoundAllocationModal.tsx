import React from "react";
import styles from "./FoundAllocationModal.module.scss";
import { CloseIcon } from "../../../assets/icons";
import DragBox from "../../DargBox/DragBox";
import ToggleButton from "../../Common/ToggleButton/ToggleButton";
import DoneButton from "../../Buttons/DoneButton/DoneButton";

const FoundAllocationModal = () => (
  <div className={styles.wrapper}>
    <div className={styles.header}>
      Found Allocation
      <CloseIcon />
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
      <DoneButton onClick={() => {}} />
    </div>
  </div>
);

export default FoundAllocationModal;
