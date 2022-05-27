import React, { useState } from "react";
import { CloseIcon, HistoryIcon } from "../../assets/icons";
import SearchInput from "../Common/SearchInput/SearchInput";
import styles from "./SearchAssetsModal.module.scss";
import cx from "classnames";

const assetsArr = [
  {
    symbol: "BTC",
    description: "Bitcoin",
    market: "CRYPTO",
  },
  {
    symbol: "ETH",
    description: "Ethereum",
    market: "CRYPTO",
  },
  {
    symbol: "XRP",
    description: "Xrp",
    market: "CRYPTO",
  },
  {
    symbol: "DOGE",
    description: "DogeCoin",
    market: "CRYPTO",
  },
  {
    symbol: "SOL",
    description: "Solana",
    market: "CRYPTO",
  },
  {
    symbol: "BTC",
    description: "Bitcoin",
    market: "CRYPTO",
  },
  {
    symbol: "BTC",
    description: "Bitcoin",
    market: "CRYPTO",
  },
  {
    symbol: "BTC",
    description: "Bitcoin",
    market: "CRYPTO",
  },
  {
    symbol: "BTC",
    description: "Bitcoin",
    market: "CRYPTO",
  },
];

enum SearchAssetsModalOptions {
  ALL = "all",
  STOCKS = "stocks",
  CONTRACTS = "contracts",
  FOREX = "forex",
  CRYPTO = "crypto",
  INDEX = "index",
  BOND = "bond",
}

const SearchAssetsModal = () => {
  const [activeOption, setActiveOption] = useState(
    SearchAssetsModalOptions.ALL
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        Assets
        <CloseIcon />
      </div>
      <SearchInput placeholder="Search for assets" />
      <div className={styles.navBar}>
        <div
          className={cx(
            styles.navBarItem,
            activeOption === SearchAssetsModalOptions.ALL && styles.active
          )}
          onClick={() => setActiveOption(SearchAssetsModalOptions.ALL)}
        >
          All
        </div>
        <div
          className={cx(
            styles.navBarItem,
            activeOption === SearchAssetsModalOptions.STOCKS && styles.active
          )}
          onClick={() => setActiveOption(SearchAssetsModalOptions.STOCKS)}
        >
          Stocks
        </div>
        <div
          className={cx(
            styles.navBarItem,
            activeOption === SearchAssetsModalOptions.CONTRACTS && styles.active
          )}
          onClick={() => setActiveOption(SearchAssetsModalOptions.CONTRACTS)}
        >
          Contracts
        </div>
        <div
          className={cx(
            styles.navBarItem,
            activeOption === SearchAssetsModalOptions.FOREX && styles.active
          )}
          onClick={() => setActiveOption(SearchAssetsModalOptions.FOREX)}
        >
          Forex
        </div>
        <div
          className={cx(
            styles.navBarItem,
            activeOption === SearchAssetsModalOptions.CRYPTO && styles.active
          )}
          onClick={() => setActiveOption(SearchAssetsModalOptions.CRYPTO)}
        >
          Crypto
        </div>
        <div
          className={cx(
            styles.navBarItem,
            activeOption === SearchAssetsModalOptions.INDEX && styles.active
          )}
          onClick={() => setActiveOption(SearchAssetsModalOptions.INDEX)}
        >
          Index
        </div>
        <div
          className={cx(
            styles.navBarItem,
            activeOption === SearchAssetsModalOptions.BOND && styles.active
          )}
          onClick={() => setActiveOption(SearchAssetsModalOptions.BOND)}
        >
          Bond
        </div>
      </div>
      <div className={styles.grid}>
        <div className={styles.gridHeaderItem}>Symbol</div>
        <div className={styles.gridHeaderItem}>Description</div>
        <div className={styles.gridHeaderItem}>Market</div>

        {assetsArr.map((item) => (
          <>
            <div className={cx(styles.gridItem, styles.row)}>
              <HistoryIcon />
              {item.symbol}
            </div>
            <div className={styles.gridItem}>{item.description}</div>
            <div className={styles.gridItem} style={{ textAlign: "end" }}>
              {item.market}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default SearchAssetsModal;
