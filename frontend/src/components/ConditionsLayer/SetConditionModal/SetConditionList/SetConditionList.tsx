import { Dispatch, SetStateAction, useState } from "react";
import styles from "./SetConditionList.module.scss";
import cx from "classnames";
import { HelpIcon, StarIcon } from "assets/icons";
import { Hint, HintTypes } from "../SetConditionModal";

enum MenuOptions {
  FAVORITES = "FAVORITES",
  INDICATORS = "INDICATORS",
  VOLUME = "VOLUME",
  AUTO = "AUTO",
  CANDLESTICK = "CANDLESTCK",
}

const menuOptions = [
  {
    id: MenuOptions.FAVORITES,
    name: "Favorites",
  },
  {
    id: MenuOptions.INDICATORS,
    name: "Indicators",
  },
  {
    id: MenuOptions.VOLUME,
    name: "Volume profile",
  },
  {
    id: MenuOptions.AUTO,
    name: "Auto",
  },
  {
    id: MenuOptions.CANDLESTICK,
    name: "Candlestick pattern",
  },
];

const dummyIndicatorsList = [
  {
    symbol: "ADX",
    name: "Average directional movement index",
  },
  {
    symbol: "ADXR",
    name: "Average Directional Movement Index Rating",
  },
  {
    symbol: "APO",
    name: "Absolute Price Oscillator",
  },
  {
    symbol: "AROON",
    name: "Aroon",
  },
  {
    symbol: "BOP",
    name: "Balance of power",
  },
  {
    symbol: "CCI",
    name: "Commodity Channel Index",
  },
];

interface SetConditionListProps {
  currentHintsType: HintTypes;
  clickHint: (hint: Hint) => void;
  favouriteIndicators: any;
  setFavouriteIndicators: Dispatch<SetStateAction<any>>;
}

const SetConditionList = ({
  currentHintsType,
  clickHint,
  favouriteIndicators,
  setFavouriteIndicators,
}: SetConditionListProps) => {
  const [activeOption, setActiveOption] = useState(MenuOptions.FAVORITES);
  const [hoveredOption, setHoveredOption] = useState<null | string>(null);
  const dummyToOption = {
    FAVORITES: favouriteIndicators,
    INDICATORS: dummyIndicatorsList,
  };

  const clickListItem = (item: any) => {
    if (currentHintsType === HintTypes.INDICATOR)
      clickHint({
        name: item.symbol,
        type: HintTypes.INDICATOR,
        parameters: [
          {
            name: "numOfBars",
          },
        ],
      });
  };

  return (
    <div className={styles.wrapper}>
      <ul className={styles.menu}>
        <header className={styles.sideMenuHeader}>scripts name</header>
        {menuOptions.map((item) => (
          <li key={item.name}>
            <button
              className={cx(
                styles.menuItem,
                item.id === activeOption && styles.activeMenuItem
              )}
              onClick={() => setActiveOption(item.id)}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
      <ul className={styles.list}>
        {(activeOption === MenuOptions.INDICATORS ||
          activeOption === MenuOptions.FAVORITES) &&
          dummyToOption[activeOption].map((item: any) => (
            <li
              className={styles.listItem}
              key={item.symbol}
              onMouseEnter={() => setHoveredOption(item.symbol)}
              onMouseLeave={() => setHoveredOption(null)}
              onClick={() => clickListItem(item)}
            >
              <span className={styles.listItemSymbol}>{item.symbol}</span>
              <span>{item.name}</span>
              {(hoveredOption === item.symbol ||
                favouriteIndicators.find(
                  (element: any) => element.name === item.name
                )) && (
                <button
                  className={styles.favouriteButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    setFavouriteIndicators((prev: any) => [...prev, item]);
                  }}
                >
                  <StarIcon />
                </button>
              )}
              {hoveredOption === item.symbol && (
                <button className={styles.helpButton}>
                  <HelpIcon />
                </button>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SetConditionList;
