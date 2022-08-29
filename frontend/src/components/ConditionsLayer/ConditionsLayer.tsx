import { CloseIcon } from "assets/icons";
import { OpenCloseSectionTypes } from "components/StrategyInterface/OpenCloseSection";
import { useState } from "react";
import { createPortal } from "react-dom";
import { useCloseModal } from "store/hooks";
import styles from "./ConditionsLayer.module.scss";
import Flow from "./Flow";

interface ConditionsLayerProps {
  type: OpenCloseSectionTypes;
}

const ConditionsLayer = ({ type }: ConditionsLayerProps) => {
  const closeModal = useCloseModal(type, "conditions");
  const [arePlaceholdersVisible, setPlaceholdersVisible] = useState(true);

  return createPortal(
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Set conditions</h2>
      <button onClick={closeModal} className={styles.closeButton} type="button">
        <CloseIcon />
      </button>
      <div className={styles.flowBoxWrapper}>
        <Flow arePlaceholdersVisible={arePlaceholdersVisible} />
      </div>
      <div className={styles.saveButtons}>
        <button
          type="button"
          className={styles.saveButton}
          onClick={() => setPlaceholdersVisible((prev) => !prev)}
        >
          Preview
        </button>
        <button
          type="button"
          className={styles.saveButton}
          disabled={arePlaceholdersVisible}
        >
          Save
        </button>
      </div>
    </div>,
    document.getElementById("modal") as HTMLElement
  );
};

export default ConditionsLayer;
