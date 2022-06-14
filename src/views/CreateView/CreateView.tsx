import React from "react";
import Calculate from "components/Calculate/Calculate";
import DetailsDropDown from "components/SideBar/DetailsDropDown/DetailsDropDown";
import OptimizeDropDown from "components/SideBar/OptimizeDropDown/OptimizeDropDown";
import StrategyInterface from "components/StrategyInterface/StrategyInterface";
import TestPreview from "components/TestPreview/TestPreview";
import ToolsBar from "components/ToolsBar/ToolsBar";
import styles from "./CreateView.module.scss";
import NavBar from "components/NavBar/NavBar";

const CreateView = () => (
  <>
    <NavBar />
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
  </>
);

export default CreateView;
