import { CloseIcon } from "assets/icons";
import { useState } from "react";
import { Node } from "react-flow-renderer";
import styles from "./SetConditionModal.module.scss";

enum HintTypes {
  INDICATOR = "INDICATOR",
  OPERATOR = "OPERATOR",
}

interface Hint {
  name: string;
  type: HintTypes;
}

interface SetConditionModalProps {
  node: Node;
  submitFn: any;
  closeFn: any;
}

const allHints = [
  {
    name: "EMA",
    type: HintTypes.INDICATOR,
  },
  {
    name: "SMA",
    type: HintTypes.INDICATOR,
  },
  {
    name: "STOCHASTIC",
    type: HintTypes.INDICATOR,
  },
  {
    name: "RSI",
    type: HintTypes.INDICATOR,
  },
  {
    name: ">",
    type: HintTypes.OPERATOR,
  },
  {
    name: "<",
    type: HintTypes.OPERATOR,
  },
  {
    name: "=",
    type: HintTypes.OPERATOR,
  },
];

const SetConditionModal = ({
  node,
  submitFn,
  closeFn,
}: SetConditionModalProps) => {
  const [currentHints, setCurrentHints] = useState<Hint[]>(
    allHints.filter((item) => item.type === HintTypes.INDICATOR)
  );
  const [conditionText, setConditionText] = useState("");

  const clickHint = (hint: Hint) => {
    setConditionText((prev) => prev + hint.name);
    setCurrentHints(allHints.filter((item) => item.type !== hint.type));
  };

  return (
    <div className={styles.wrapper}>
      <h2>Set condition</h2>
      <button className={styles.closeButton} type="button" onClick={closeFn}>
        <CloseIcon />
      </button>
      <input
        className={styles.textInput}
        type="text"
        value={conditionText}
        onChange={(e) => setConditionText(e.target.value)}
      />
      <div className={styles.hintsWrapper}>
        {currentHints.map((item) => (
          <button
            type="button"
            className={styles.hint}
            onClick={() => clickHint(item)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <button
        className={styles.submitButton}
        type="button"
        onClick={() => {
          closeFn();
          submitFn(node);
        }}
      >
        Submit condition
      </button>
    </div>
  );
};

export default SetConditionModal;
