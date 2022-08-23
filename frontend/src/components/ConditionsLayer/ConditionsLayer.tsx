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
      <button onClick={closeModal} className={styles.closeButton} type="button">
        <CloseIcon />
      </button>
      <button
        onClick={() => setPlaceholdersVisible((prev) => !prev)}
        className={styles.placeholdersButton}
        type="button"
      >
        Show/Hide Placeholders
      </button>
      <div className={styles.flowBoxWrapper}>
        <Flow arePlaceholdersVisible={arePlaceholdersVisible} />
      </div>
      <div className={styles.saveButtons}>
        <button type="button" className={styles.saveButton}>
          Preview
        </button>
        <button type="button" className={styles.saveButton}>
          Save
        </button>
      </div>
    </div>,
    document.getElementById("modal") as HTMLElement
  );
};

export default ConditionsLayer;
