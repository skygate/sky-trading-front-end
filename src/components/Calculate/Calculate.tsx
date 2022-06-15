import React from "react";
import Button, { ButtonSize } from "components/Buttons/Button";
import styles from "./Calculate.module.scss";
import { ActionCreators } from "redux-undo";
import { useAppDispatch } from "store/hooks";

const Calculate = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.wrapper}>
      <Button color size={ButtonSize.LARGE}>
        Calculate
      </Button>
      <Button size={ButtonSize.LARGE}>Save as a draft</Button>
      <div className={styles.row}>
        <Button
          size={ButtonSize.SMALL}
          onClick={() => dispatch(ActionCreators.undo())}
        >
          Undo
        </Button>
        <Button
          size={ButtonSize.SMALL}
          onClick={() => dispatch(ActionCreators.redo())}
        >
          Redo
        </Button>
      </div>
    </div>
  );
};

export default Calculate;
