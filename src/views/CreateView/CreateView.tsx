import React, { useState } from "react";
import Calculate from "../../components/Calculate/Calculate";
import DetailsDropDown from "../../components/SideBar/DetailsDropDown/DetailsDropDown";
import OptimizeDropDown from "../../components/SideBar/OptimizeDropDown/OptimizeDropDown";
import StrategyBar from "../../components/StrategyBar/StrategyBar";
import StrategyInterfaceElement from "../../components/StrategyInterfaceElement/StrategyInterfaceElement";
import TestPreview from "../../components/TestPreview/TestPreview";
import ToolsBar from "../../components/ToolsBar/ToolsBar";
import styles from "./CreateView.module.scss";

const dummyStrategy = [
  {
    type: "open",
    isExpanded: true,
    elements: [
      {
        type: "condition",
        isExpanded: true,
        elements: [
          {
            type: "assets",
            isExpanded: true,
            elements: [
              {
                type: "assetsBar",
                elements: [],
              },
            ],
          },
          {
            type: "addCondition",
            elements: [],
          },
        ],
      },
      {
        type: "close",
        isExpanded: true,
        elements: [
          {
            type: "condition",
            isExpanded: true,
            elements: [
              {
                type: "assets",
                isExpanded: true,
                elements: [
                  {
                    type: "assetsBar",
                    elements: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

function CreateView() {
  const [isStrategyExpanded, setStrategyExpanded] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSidebar}>
        <DetailsDropDown />
        <OptimizeDropDown />
        <Calculate />
      </div>

      <div className={styles.content}>
        <div
          className={styles.strategyBarWrapper}
          onClick={() => setStrategyExpanded((prev) => !prev)}
        >
          <StrategyBar isExpanded={isStrategyExpanded} />
        </div>
        {isStrategyExpanded && (
          <div className={styles.strategyWrapper}>
            {dummyStrategy.map((item) => (
              <StrategyInterfaceElement
                isExpanded={true}
                type={item.type}
                elements={item.elements}
                isLastChild={true}
              />
            ))}
          </div>
        )}
      </div>

      <div className={styles.rightSidebar}>
        <ToolsBar />
        <TestPreview />
      </div>
    </div>
  );
}

export default CreateView;
