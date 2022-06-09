import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useStrategyDetailsSelector } from "store/hooks";
import { editName } from "store/strategyDetailsSlice";
import { ArrowDownIcon, ArrowUpIcon, GroupIcon } from "assets/icons";
import Bar from "components/Common/Bar/Bar";
import styles from "./StrategyBar.module.scss";

interface StrategyBarProps {
  isExpanded: boolean;
}

const StrategyBar = ({ isExpanded }: StrategyBarProps) => {
  const [isInputActive, setInputActive] = useState(false);
  const ref: React.RefObject<HTMLInputElement> = useRef(null);
  const [strategyName, setStrategyName] = useState("");
  const { name: globalStateName } = useStrategyDetailsSelector();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (ref.current && isInputActive) ref.current.focus();
  }, [isInputActive]);

  useEffect(() => {
    setStrategyName(globalStateName);
  }, [globalStateName]);

  const handleFocusOff = () => {
    setInputActive(false);
    dispatch(editName(strategyName));
  };

  return (
    <Bar>
      {isExpanded ? <ArrowUpIcon /> : <ArrowDownIcon />}
      <GroupIcon />
      {isInputActive ? (
        <input
          onClick={(e) => e.stopPropagation()}
          className={styles.input}
          placeholder="New strategy"
          value={strategyName}
          onChange={(e) => setStrategyName(e.target.value)}
          ref={ref}
          onBlur={handleFocusOff}
        />
      ) : (
        <span
          onClick={(e) => {
            e.stopPropagation();
            setInputActive(true);
          }}
          className={styles.inputSpan}
        >
          {strategyName || "New strategy"}
        </span>
      )}
    </Bar>
  );
};

export default StrategyBar;
