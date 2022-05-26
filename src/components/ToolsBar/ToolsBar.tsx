import React, { useState } from "react";
import { CursorIcon, SpeechBubbleIcon } from "../../assets/icons";
import styles from "./ToolsBar.module.scss";
import cx from "classnames";

enum ToolBarOptions {
  CURSOR = "cursor",
  COMMENT = "comment",
}

const ToolsBar = () => {
  const [activeOption, setOption] = useState(ToolBarOptions.CURSOR);

  return (
    <div className={styles.wrapper}>
      <div
        className={
          activeOption === ToolBarOptions.CURSOR
            ? cx(styles.toolBox, styles.active)
            : styles.toolBox
        }
        onClick={() => setOption(ToolBarOptions.CURSOR)}
      >
        <CursorIcon />
      </div>
      <div
        className={
          activeOption === ToolBarOptions.COMMENT
            ? cx(styles.toolBox, styles.active)
            : styles.toolBox
        }
        onClick={() => setOption(ToolBarOptions.COMMENT)}
      >
        <SpeechBubbleIcon />
      </div>
    </div>
  );
};

export default ToolsBar;
