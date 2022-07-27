import Button, { ButtonSize } from "components/Buttons";
import styles from "./Calculate.module.scss";
import { ActionCreators } from "redux-undo";
import { useAppDispatch } from "store/hooks";
import { pushDraftAction } from "store/draftsSlice";
import { useNewDraftIndex } from "store/hooks";
import { useNavigate } from "react-router-dom";

const Calculate = () => {
  const dispatch = useAppDispatch();
  const newDraftIndex = useNewDraftIndex();
  const navigate = useNavigate();

  const saveDraft = () => {
    dispatch(
      pushDraftAction({
        id: newDraftIndex,
        name: "x",
        date: new Date(),
      })
    );
    navigate("/drafts");
  };

  return (
    <div className={styles.wrapper}>
      <Button color size={ButtonSize.LARGE}>
        Calculate
      </Button>
      <Button size={ButtonSize.LARGE} onClick={saveDraft}>
        Save as a draft
      </Button>
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
