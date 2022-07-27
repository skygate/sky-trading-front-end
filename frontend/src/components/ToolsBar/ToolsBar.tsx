import { CursorIcon, SpeechBubbleIcon } from "assets/icons";
import styles from "./ToolsBar.module.scss";
import cx from "classnames";
import { useAppDispatch, useModeSelector } from "store/hooks";
import { setCommentModeAction } from "store/commentsSlice";

const ToolsBar = () => {
  const isCommentModeActive = useModeSelector();
  const dispatch = useAppDispatch();

  return (
    <>
      <div className={styles.wrapper}>
        <div
          className={cx(styles.toolBox, !isCommentModeActive && styles.active)}
          onClick={() => dispatch(setCommentModeAction(false))}
        >
          <CursorIcon />
        </div>
        <div
          className={cx(styles.toolBox, isCommentModeActive && styles.active)}
          onClick={() => dispatch(setCommentModeAction(true))}
        >
          <SpeechBubbleIcon />
        </div>
      </div>
    </>
  );
};

export default ToolsBar;
