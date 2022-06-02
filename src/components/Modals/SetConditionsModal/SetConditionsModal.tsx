import React from "react";
import { CloseIcon } from "../../../assets/icons";
import ToggleButton from "../../Common/ToggleButton/ToggleButton";
import DragBox from "../../DargBox/DragBox";
import DoneButton from "../../Buttons/DoneButton/DoneButton";
import styles from "./SetConditionsModal.module.scss";

const SetConditionsModal = () => (
  <div className={styles.wrapper}>
    <div className={styles.sectionSpace}>
      Set conditions
      <div className={styles.close}>
        <CloseIcon />
      </div>
    </div>
    <div className={styles.sectionStart}>
      if
      <DragBox />
      <DragBox />
      <DragBox />
    </div>
    <div className={styles.sectionStart}>
      then open
      <DragBox />
    </div>
    <div className={styles.sectionSpace}>
      Optimize
      <ToggleButton isToggleActive />
    </div>
    <div className={styles.sectionStart} style={{ fontSize: "var(--font-12)" }}>
      Filters
    </div>
    <div className={styles.sectionStart}>
      chart type
      <DragBox />
    </div>
    <div className={styles.sectionStart}>
      interval
      <DragBox />
    </div>
    <div style={{ alignSelf: "flex-end" }}>
      <DoneButton onClick={() => {}} active />
    </div>
  </div>
);

export default SetConditionsModal;
