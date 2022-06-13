import React, { useEffect } from "react";
import Calculate from "components/Calculate/Calculate";
import DetailsDropDown from "components/SideBar/DetailsDropDown/DetailsDropDown";
import OptimizeDropDown from "components/SideBar/OptimizeDropDown/OptimizeDropDown";
import StrategyInterface from "components/StrategyInterface/StrategyInterface";
import TestPreview from "components/TestPreview/TestPreview";
import ToolsBar from "components/ToolsBar/ToolsBar";
import styles from "./CreateView.module.scss";
import { useDispatch } from "react-redux";
import { ActionCreators } from "redux-undo";

const CreateView = () => {
  const dispatch = useDispatch();

  const handleKeyDown = (e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && !e.shiftKey && e.code === "KeyZ") {
      dispatch(ActionCreators.undo());
    } else if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.code === "KeyZ") {
      dispatch(ActionCreators.redo());
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return document.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSidebar}>
        <DetailsDropDown />
        <OptimizeDropDown />
        <Calculate />
      </div>

      <div className={styles.content}>
        <StrategyInterface />
      </div>

      <div className={styles.rightSidebar}>
        <ToolsBar />
        <TestPreview />
      </div>
    </div>
  );
};

export default CreateView;
