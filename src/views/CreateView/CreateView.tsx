import { useEffect } from "react";
import Calculate from "components/Calculate";
import DetailsDropDown from "components/SideBar/DetailsDropDown";
import OptimizeDropDown from "components/SideBar/OptimizeDropDown";
import StrategyInterface from "components/StrategyInterface";
import TestPreview from "components/TestPreview";
import ToolsBar from "components/ToolsBar";
import styles from "./CreateView.module.scss";
import NavBar from "components/NavBar";
import { useDispatch } from "react-redux";
import { ActionCreators } from "redux-undo";
import CommentsOverlay from "components/CommentsOverlay";
import { useModeSelector } from "store/hooks";

const CreateView = () => {
  const dispatch = useDispatch();
  const isCommentModeActive = useModeSelector();

  const handleKeyDown = (e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && !e.shiftKey && e.code === "KeyZ") {
      dispatch(ActionCreators.undo());
    } else if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.code === "KeyZ") {
      dispatch(ActionCreators.redo());
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <>
      <NavBar />
      <div className={styles.wrapper}>
        <div className={styles.leftSidebar}>
          <DetailsDropDown />
          <OptimizeDropDown />
          <Calculate />
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <StrategyInterface />
          </div>
          {isCommentModeActive && <CommentsOverlay />}
        </div>

        <div className={styles.rightSidebar}>
          <ToolsBar />
          <TestPreview />
        </div>
      </div>
    </>
  );
};

export default CreateView;
