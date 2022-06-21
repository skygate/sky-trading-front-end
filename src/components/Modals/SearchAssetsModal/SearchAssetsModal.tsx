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
  const [filteredByTypeAssets, setFilteredByTypeAssets] =
    useState(accessibleAssets);
  const [searchValue, setSearchValue] = useState("");
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

  const filterByText = () => {
    setDisplayedAssets(
      filteredByTypeAssets.filter(
        (item) =>
          item.description.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.symbol.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.market.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  };

  const filterAssets = () => {
    if (activeOption === SearchAssetsModalOptions.ALL) {
      setFilteredByTypeAssets(accessibleAssets);
    } else {
      setFilteredByTypeAssets(
        accessibleAssets.filter(
          (item) => item.market.toLowerCase() === activeOption.toLowerCase()
        )
      );
    }
  };

  useEffect(() => {
    filterAssets();
  }, [activeOption]);

  useEffect(() => {
    filterByText();
  }, [searchValue, filteredByTypeAssets]);

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
      <SearchInput
        placeholder="Search for assets"
        value={searchValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchValue(e.target.value)
        }
      />
      <div className={styles.navBar}>
        {Object.entries(SearchAssetsModalOptions).map(([, value]) => (
          <div
            className={cx(
              styles.navBarItem,
              activeOption === value && styles.active
            )}
            onClick={() => {
              setActiveOption(value);
            }}
          >
            {value}
          </div>
        ))}
      </div>
      <div className={styles.grid}>
        <table className={styles.table}>
          <thead className={styles.tableHeader}>
            <tr className={cx(styles.tableRow, styles.tableHeaderRow)}>
              <th className={cx(styles.tableItem, styles.tableHeaderItem)}>
                Symbol
              </th>
              <th className={cx(styles.tableItem, styles.tableHeaderItem)}>
                Description
              </th>
              <th className={cx(styles.tableItem, styles.tableHeaderItem)}>
                Market
              </th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {displayedAssets.map((item) => (
              <tr
                className={styles.tableRow}
                onClick={() => setAssetsItem(item)}
              >
                <td className={styles.tableItem}>
                  <HistoryIcon />
                  {item.symbol}
                </td>
                <td className={styles.tableItem}>{item.description}</td>
                <td className={styles.tableItem}>{item.market}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchAssetsModal;
