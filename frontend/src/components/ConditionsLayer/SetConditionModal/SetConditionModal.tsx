import { CloseIcon } from "assets/icons";
import {
  Dispatch,
  KeyboardEventHandler,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Node } from "react-flow-renderer";
import styles from "./SetConditionModal.module.scss";
import cx from "classnames";
import SetIndicatorModal from "./SetIndicatorModal";
import DarkOverlay from "components/DarkOverlay";
import Button, { ButtonSize } from "components/Buttons/Button";

export enum HintTypes {
  INDICATOR = "INDICATOR",
  OPERATOR = "OPERATOR",
}

export interface IndicatorParameter {
  name: string;
}

export interface Hint {
  name: string;
  type: HintTypes;
  parameters?: IndicatorParameter[];
}

interface SetConditionModalProps {
  node: Node;
  submitFn: any;
  closeFn: any;
  setCurrentSetConditionValue: Dispatch<SetStateAction<string>>;
}

const allHints: Hint[] = [
  {
    name: "EMA",
    type: HintTypes.INDICATOR,
    parameters: [
      {
        name: "numOfBars",
      },
    ],
  },
  {
    name: "SMA",
    type: HintTypes.INDICATOR,
    parameters: [
      {
        name: "numOfBars",
      },
    ],
  },
  {
    name: "STOCHASTIC",
    type: HintTypes.INDICATOR,
    parameters: [
      {
        name: "numOfBars",
      },
    ],
  },
  {
    name: "RSI",
    type: HintTypes.INDICATOR,
    parameters: [
      {
        name: "numOfBars",
      },
    ],
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
  setCurrentSetConditionValue,
}: SetConditionModalProps) => {
  const [currentHints, setCurrentHints] = useState<Hint[]>(
    allHints.filter((item) => item.type === HintTypes.INDICATOR)
  );
  const [conditionText, setConditionText] = useState("");
  const [words, setWords] = useState<string[]>([]);
  const [typingError, setTypingError] = useState(false);
  const [displayedIndicator, setDisplayedIndicator] = useState<null | Hint>(
    null
  );
  const [currentIndicatorParameters, setCurrentIndicatorParameters] =
    useState<any>(null);

  useEffect(() => {
    if (currentIndicatorParameters) {
      setWords((prev) => [...prev, currentIndicatorParameters]);
      setCurrentIndicatorParameters(null);
    }
  }, [currentIndicatorParameters]);

  const clickHint = (hint: Hint) => {
    if (hint.type === HintTypes.INDICATOR) {
      setDisplayedIndicator(hint);
    }
    setConditionText("");
    setTypingError(false);
    setWords((prev) => [...prev, hint.name]);
    setCurrentHints(allHints.filter((item) => item.type !== hint.type));
  };

  const handleKeyPress: KeyboardEventHandler<HTMLElement> = ({ key }) => {
    if (key === "Enter" || key === " ") {
      if (
        allHints.filter(
          (item) => item.name.toUpperCase() === conditionText.toUpperCase()
        ).length > 0
      ) {
        const found = allHints.find(
          (item) => item.name.toUpperCase() === conditionText.toUpperCase()
        );
        if (found && found.type === HintTypes.INDICATOR)
          setDisplayedIndicator(found);
        setTypingError(false);
        setWords((prev) => [...prev, conditionText]);
        setConditionText("");
      } else {
        setTypingError(true);
      }
    } else if (key === "Backspace" && conditionText === "") {
      setConditionText(words.at(-1) || "");
      setWords((prev) => prev.slice(0, -1));
    }
  };

  return (
    <div className={styles.wrapper}>
      {displayedIndicator && (
        <>
          <SetIndicatorModal
            indicator={displayedIndicator}
            setDisplayedIndicator={setDisplayedIndicator}
            setCurrentIndicatorParameters={setCurrentIndicatorParameters}
            setWords={setWords}
          />
          <DarkOverlay />
        </>
      )}
      <div className={styles.headerWrapper}>
        <h2 className={styles.modalLabel}>Set condition</h2>
        <button className={styles.closeButton} type="button" onClick={closeFn}>
          <CloseIcon />
        </button>
      </div>
      <div className={styles.mainSection}>
        <div
          className={cx(
            styles.textInputWrapper,
            typingError && styles.textInputWrapperError
          )}
        >
          {words.map((item) => (
            <span>{item}</span>
          ))}
          <input
            className={styles.textInput}
            type="text"
            value={conditionText}
            onChange={(e) => setConditionText(e.target.value)}
            onKeyDown={handleKeyPress}
          />
        </div>
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
      </div>
      <div className={styles.buttonsWrapper}>
        <Button
          size={ButtonSize.SMALL}
          onClick={() => {
            closeFn();
            submitFn(node, words);
          }}
        >
          Cancel
        </Button>
        <Button
          size={ButtonSize.SMALL}
          color
          onClick={() => {
            closeFn();
            submitFn(node, words);
          }}
        >
          Ok
        </Button>
      </div>
    </div>
  );
};

export default SetConditionModal;
