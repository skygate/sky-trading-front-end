import React from "react";
import Button, { ButtonSize } from "components/Buttons/Button";
import styles from "./Calculate.module.scss";

const Calculate = () => (
  <div className={styles.wrapper}>
    <Button color size={ButtonSize.LARGE}>
      Calculate
    </Button>
    <Button size={ButtonSize.LARGE}>Save as a draft</Button>
    <div className={styles.row}>
      <Button size={ButtonSize.SMALL}>Undo</Button>
      <Button size={ButtonSize.SMALL}>Redo</Button>
    </div>
  </div>
);

export default Calculate;
