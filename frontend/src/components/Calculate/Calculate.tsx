import Button, { ButtonSize } from "components/Buttons";
import styles from "./Calculate.module.scss";
import { ActionCreators } from "redux-undo";
import { useNavigate } from "react-router-dom";
import { useCreateStrategyMutation } from "store/strategyApi";
import { useDispatch } from "react-redux";

const Calculate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [createStrategy, result] = useCreateStrategyMutation();

  const saveDraft = () => {
    createStrategy({
      name: "dsazaf",
      description: "sada",
    });
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
