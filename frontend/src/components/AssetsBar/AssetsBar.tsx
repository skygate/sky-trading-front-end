import { AddAssetIcon, OkIcon, SeparatorIcon } from "assets/icons";
import Bar from "components/Common/Bar";
import { useOpenModal, useModalsSelector } from "store/hooks";
import SearchAssetsModal from "components/Modals/SearchAssetsModal";
import styles from "./AssetsBar.module.scss";
import DarkOverlay from "components/DarkOverlay";
import { AssetStrategyElement } from "store/strategyCreationSlice";

const AssetsBar = ({ symbol, description, market }: AssetStrategyElement) => {
  const openModal = useOpenModal("asset");
  const { asset } = useModalsSelector();

  return (
    <div className={styles.wrapper}>
      <Bar
        className={styles.bar}
        onClick={(e) => {
          e.stopPropagation();
          openModal();
        }}
      >
        {symbol && description && market ? (
          <>
            <OkIcon />
            <span style={{ paddingLeft: "2px" }}>{symbol}</span>
            <span>{description}</span>
            <SeparatorIcon />
            <span>{market}</span>
          </>
        ) : (
          <>
            <AddAssetIcon />
            <span style={{ paddingLeft: "2px" }}>Add an asset</span>
          </>
        )}
      </Bar>
      {asset && (
        <>
          <DarkOverlay modal />
          <SearchAssetsModal />
        </>
      )}
    </div>
  );
};

export default AssetsBar;
