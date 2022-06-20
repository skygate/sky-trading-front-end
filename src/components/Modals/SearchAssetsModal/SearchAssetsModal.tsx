import React, { useEffect, useState } from "react";
import { CloseIcon, HistoryIcon } from "../../../assets/icons";
import SearchInput from "../../Common/SearchInput/SearchInput";
import styles from "./SearchAssetsModal.module.scss";
import cx from "classnames";
import { useAppDispatch, useCloseModal } from "store/hooks";
import { accessibleAssets, assetsElement } from "constant/assets";
import { setAsset } from "store/assetsSlice";
import { setIsAssetSet } from "store/conditionsSlice";

enum SearchAssetsModalOptions {
  ALL = "all",
  STOCKS = "stocks",
  CONTRACTS = "contracts",
  FOREX = "forex",
  CRYPTO = "crypto",
  INDEX = "index",
  BOND = "bond",
}

interface SearchAssetsModalProps {
  id: string;
}

const SearchAssetsModal = ({ id }: SearchAssetsModalProps) => {
  const [activeOption, setActiveOption] = useState(
    SearchAssetsModalOptions.ALL
  );
  const [displayedAssets, setDisplayedAssets] = useState(accessibleAssets);
  const closeModal = useCloseModal(id);
  const dispatch = useAppDispatch();

  const setAssetsItem = (assetItem: assetsElement) => {
    const payload = {
      id,
      asset: assetItem,
    };
    dispatch(setAsset(payload));
    dispatch(setIsAssetSet(id));
    closeModal();
  };

  const filterAssets = () => {
    if (activeOption === SearchAssetsModalOptions.ALL) {
      setDisplayedAssets(accessibleAssets);
    } else {
      setDisplayedAssets(
        accessibleAssets.filter(
          (item) => item.market.toLowerCase() === activeOption.toLowerCase()
        )
      );
    }
  };

  useEffect(() => {
    filterAssets();
  }, [activeOption]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        Assets
        <div
          onClick={(e) => {
            e.stopPropagation();
            closeModal();
          }}
          className={styles.closeButton}
        >
          <CloseIcon />
        </div>
      </div>
      <SearchInput placeholder="Search for assets" />
      <div className={styles.navBar}>
        <div
          className={cx(
            styles.navBarItem,
            activeOption === SearchAssetsModalOptions.ALL && styles.active
          )}
          onClick={() => {
            setActiveOption(SearchAssetsModalOptions.ALL);
          }}
        >
          All
        </div>
        <div
          className={cx(
            styles.navBarItem,
            activeOption === SearchAssetsModalOptions.STOCKS && styles.active
          )}
          onClick={() => {
            setActiveOption(SearchAssetsModalOptions.STOCKS);
          }}
        >
          Stocks
        </div>
        <div
          className={cx(
            styles.navBarItem,
            activeOption === SearchAssetsModalOptions.CONTRACTS && styles.active
          )}
          onClick={() => {
            setActiveOption(SearchAssetsModalOptions.CONTRACTS);
          }}
        >
          Contracts
        </div>
        <div
          className={cx(
            styles.navBarItem,
            activeOption === SearchAssetsModalOptions.FOREX && styles.active
          )}
          onClick={() => {
            setActiveOption(SearchAssetsModalOptions.FOREX);
          }}
        >
          Forex
        </div>
        <div
          className={cx(
            styles.navBarItem,
            activeOption === SearchAssetsModalOptions.CRYPTO && styles.active
          )}
          onClick={() => {
            setActiveOption(SearchAssetsModalOptions.CRYPTO);
          }}
        >
          Crypto
        </div>
        <div
          className={cx(
            styles.navBarItem,
            activeOption === SearchAssetsModalOptions.INDEX && styles.active
          )}
          onClick={() => {
            setActiveOption(SearchAssetsModalOptions.INDEX);
          }}
        >
          Index
        </div>
        <div
          className={cx(
            styles.navBarItem,
            activeOption === SearchAssetsModalOptions.BOND && styles.active
          )}
          onClick={() => {
            setActiveOption(SearchAssetsModalOptions.BOND);
          }}
        >
          Bond
        </div>
      </div>
      <div className={styles.grid}>
        <table>
          <thead>
            <tr className={styles.gridHeaderWrapper}>
              <th className={styles.gridHeaderItem}>Symbol</th>
              <th className={styles.gridHeaderItem}>Description</th>
              <th className={styles.gridHeaderItem}>Market</th>
            </tr>
          </thead>
          <tbody>
            {displayedAssets.map((item) => (
              <tr
                className={styles.rowWrapper}
                onClick={() => setAssetsItem(item)}
              >
                <td className={styles.gridItem}>
                  <HistoryIcon />
                  {item.symbol}
                </td>
                <td className={styles.gridItem}>{item.description}</td>
                <td className={styles.gridItem}>{item.market}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchAssetsModal;
