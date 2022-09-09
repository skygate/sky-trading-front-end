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
import SetConditionList from "./SetConditionList";

export enum HintTypes {
  INDICATOR = "INDICATOR",
  OPERATOR = "OPERATOR",
  VALUE = "VALUE",
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

export const allHints: Hint[] = [
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
    name: "Stochastic",
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
    name: ">=",
    type: HintTypes.OPERATOR,
  },
  {
    name: "<=",
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
  {
    name: "cross from above",
    type: HintTypes.OPERATOR,
  },
  {
    name: "cross from below",
    type: HintTypes.OPERATOR,
  },
  {
    name: "rises by",
    type: HintTypes.OPERATOR,
  },
];

export interface Word {
  content: string;
  type: HintTypes;
}

const formatWords = (items: Word[]) =>
  items
    .map(({ content }) => content)
    .join(" ")
    .slice(0, 14) + "... ";

const SetConditionModal = ({
  node,
  submitFn,
  closeFn,
  setCurrentSetConditionValue,
}: SetConditionModalProps) => {
  const [currentHints, setCurrentHints] = useState<Hint[]>(
    allHints.filter((item) => item.type === HintTypes.INDICATOR)
  );
  const [currentHintsType, setCurrentHintsType] = useState(HintTypes.INDICATOR);
  const [conditionText, setConditionText] = useState("");
  const [words, setWords] = useState<Word[]>([]);
  const [typingError, setTypingError] = useState(false);
  const [displayedIndicator, setDisplayedIndicator] = useState<null | Hint>(
    null
  );
  const [currentIndicatorParameters, setCurrentIndicatorParameters] =
    useState<any>(null);
  const [favouriteIndicators, setFavouriteIndicators] = useState<any>([]);

  useEffect(() => {
    if (currentIndicatorParameters) {
      setWords((prev) => [
        ...prev,
        { content: currentIndicatorParameters, type: HintTypes.VALUE },
      ]);
      setCurrentIndicatorParameters(null);
    }
  }, [currentIndicatorParameters]);

  useEffect(() => {
    setCurrentHints(
      allHints.filter(
        (item) =>
          item.type === currentHintsType &&
          item.name.toLowerCase().includes(conditionText.toLowerCase())
      )
    );
  }, [conditionText, currentHintsType]);

  const clickHint = (hint: Hint) => {
    if (hint.type === HintTypes.INDICATOR) setDisplayedIndicator(hint);
    setConditionText("");
    setTypingError(false);
    setWords((prev) => [...prev, { content: hint.name, type: hint.type }]);
    if (hint.type === HintTypes.OPERATOR)
      setCurrentHintsType(HintTypes.INDICATOR);
  };

  const handleKeyPress: KeyboardEventHandler<HTMLElement> = ({ key }) => {
    if (key === "Enter" || key === " ") {
      const found = allHints.find(
        (item) => item.name.toUpperCase() === conditionText.toUpperCase()
      );
      if (found) {
        if (found.type === HintTypes.INDICATOR) setDisplayedIndicator(found);
        setTypingError(false);
        setWords((prev) => [
          ...prev,
          { content: conditionText, type: found.type },
        ]);
        setConditionText("");
      } else {
        setTypingError(true);
      }
    } else if (
      key === "Backspace" &&
      conditionText === "" &&
      words.length > 0
    ) {
      if (words.at(-1)?.type === HintTypes.VALUE) {
        setConditionText(words.at(-2)?.content || "");
        setWords((prev) => prev.slice(0, -2));
      } else {
        setConditionText(words.at(-1)?.content || "");
        setWords((prev) => prev.slice(0, -1));
      }
      setCurrentHintsType((prev) =>
        prev === HintTypes.OPERATOR ? HintTypes.INDICATOR : HintTypes.OPERATOR
      );
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
            setHintsType={setCurrentHintsType}
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
          {words.map((item, index) => (
            <span className={styles.wordSpan} key={`${item.content}${index}`}>
              {item.content}
            </span>
          ))}
          <input
            className={styles.textInput}
            type="text"
            value={conditionText}
            onChange={(e) => setConditionText(e.target.value)}
            onKeyDown={handleKeyPress}
          />
        </div>
        <header className={styles.hintHeader}>Suggestions</header>
        <div className={styles.hintsWrapper}>
          {currentHints.map((item) => (
            <button
              type="button"
              className={styles.hint}
              onClick={() => clickHint(item)}
              key={item.name}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <SetConditionList
        currentHintsType={currentHintsType}
        clickHint={clickHint}
        favouriteIndicators={favouriteIndicators}
        setFavouriteIndicators={setFavouriteIndicators}
      />
      <div className={styles.buttonsWrapper}>
        <Button
          size={ButtonSize.SMALL}
          onClick={() => {
            closeFn();
          }}
        >
          Cancel
        </Button>
        <Button
          size={ButtonSize.SMALL}
          color
          onClick={() => {
            closeFn();
            submitFn(node, formatWords(words));
          }}
        >
          Ok
        </Button>
      </div>
    </div>
  );
};

export default SetConditionModal;
