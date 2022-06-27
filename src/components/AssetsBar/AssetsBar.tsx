import { AddAssetIcon, OkIcon, SeparatorIcon } from "assets/icons";
import Bar from "components/Common/Bar";
import {
  useOpenModal,
  useModalsSelector,
  useAssetsSelector,
} from "store/hooks";
import SearchAssetsModal from "components/Modals/SearchAssetsModal";
import styles from "./AssetsBar.module.scss";
import DarkOverlay from "components/DarkOverlay";

interface AssetsBarProps {
  width?: string;
  id: string;
}

const AssetsBar = ({ width, id }: AssetsBarProps) => {
  const openModal = useOpenModal(id);
  const modal = useModalsSelector(id);
  const assetInfo = useAssetsSelector(id);

  return (
    <div className={styles.wrapper}>
      <Bar
        width={width}
        className={styles.bar}
        onClick={(e) => {
          e.stopPropagation();
          openModal();
        }}
      >
        {assetInfo && assetInfo.asset ? (
          <>
            <OkIcon />
            <span style={{ paddingLeft: "2px" }}>
              {assetInfo.asset?.symbol}
            </span>
            <span>{assetInfo.asset?.description}</span>
            <SeparatorIcon />
            <span>{assetInfo.asset?.market}</span>
          </>
        ) : (
          <>
            <AddAssetIcon />
            <span style={{ paddingLeft: "2px" }}>Add an asset</span>
          </>
        )}
      </Bar>
      {modal?.isOpen && (
        <>
          <DarkOverlay modal />
          <SearchAssetsModal id={id} />
        </>
      )}
    </div>
  );
};

export default AssetsBar;
