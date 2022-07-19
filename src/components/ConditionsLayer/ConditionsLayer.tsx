import { CloseIcon } from "assets/icons";
import { OpenCloseSectionTypes } from "components/StrategyInterface/OpenCloseSection/OpenCloseSection";
import { createPortal } from "react-dom";
import { useCloseModal } from "store/hooks";
import styles from "./ConditionsLayer.module.scss";
import Flow from "./Flow";

interface ConditionsLayerProps {
  type: OpenCloseSectionTypes;
}

const ConditionsLayer = ({ type }: ConditionsLayerProps) => {
  const closeModal = useCloseModal(type, "conditions");
  return createPortal(
    <div className={styles.wrapper}>
      <button onClick={closeModal} className={styles.closeButton}>
        <CloseIcon />
      </button>
      <div className={styles.flowBoxWrapper}>
        <Flow />
      </div>
    </div>,
    document.getElementById("modal") as HTMLElement
  );
};

export default ConditionsLayer;
