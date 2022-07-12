import React, { useEffect, useState } from "react";
import { CloseIcon, HistoryIcon } from "assets/icons";
import SearchInput from "components/Common/SearchInput";
import styles from "./SearchAssetsModal.module.scss";
import cx from "classnames";
import { useAppDispatch, useCloseModal, useOpenModal } from "store/hooks";
import { accessibleAssets, assetsElement } from "constant/assets";
import { updateAssetAction } from "store/strategyCreationSlice";

enum SearchAssetsModalOptions {
  ALL = "all",
  STOCKS = "stocks",
  CONTRACTS = "contracts",
  FOREX = "forex",
  CRYPTO = "crypto",
  INDEX = "index",
  BOND = "bond",
}

interface SearchAssetsModalProps {}

const SearchAssetsModal = ({}: SearchAssetsModalProps) => {
  const [activeOption, setActiveOption] = useState(
    SearchAssetsModalOptions.ALL
  );
  const [displayedAssets, setDisplayedAssets] = useState(accessibleAssets);
  const [assetsFilteredByType, setAssetsFilteredByType] =
    useState(accessibleAssets);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useAppDispatch();
  const openModal = useOpenModal("asset");
  const closeModal = useCloseModal("asset");

  const setAssetsItem = (assetItem: assetsElement) => {
    dispatch(
      updateAssetAction({
        isExpanded: true,
        ...assetItem,
      })
    );
    closeModal();
  };

  const filterByText = () => {
    setDisplayedAssets(
      assetsFilteredByType.filter(
        (item) =>
          item.description.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.symbol.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.market.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  };

  const filterAssets = () => {
    if (activeOption === SearchAssetsModalOptions.ALL)
      return setAssetsFilteredByType(accessibleAssets);

    setAssetsFilteredByType(
      accessibleAssets.filter(
        (item) => item.market.toLowerCase() === activeOption.toLowerCase()
      )
    );
  };

  useEffect(() => {
    filterAssets();
  }, [activeOption]);

  useEffect(() => {
    filterByText();
  }, [searchValue, assetsFilteredByType]);

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
