import { useEffect, useRef, useState, RefObject } from "react";
import { useAppDispatch } from "store/hooks";
import { ArrowDownIcon, ArrowUpIcon, GroupIcon } from "assets/icons";
import Bar from "components/Common/Bar";
import styles from "./StrategyBar.module.scss";
import { editNameAction } from "store/strategyCreationSlice";

interface StrategyBarProps {
  isExpanded: boolean;
  name: string;
}

const StrategyBar = ({ isExpanded, name }: StrategyBarProps) => {
  const [isInputActive, setInputActive] = useState(false);
  const ref: RefObject<HTMLInputElement> = useRef(null);
  const [strategyName, setStrategyName] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (ref.current && isInputActive) ref.current.focus();
  }, [isInputActive]);

  useEffect(() => {
    setStrategyName(name);
  }, [name]);

  const handleFocusOff = () => {
    setInputActive(false);
    dispatch(editNameAction(strategyName));
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
