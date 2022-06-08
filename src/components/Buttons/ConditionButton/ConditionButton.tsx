import React, { ReactNode, useState } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "assets/icons";
import styles from "./ConditionButton.module.scss";
import EditGroup from "components/EditGroups/EditGroups";
import ConditionsModals from "../../Modals/ConditionsModals/ConditionsModals";

interface ConditionButtonProps {
  children: ReactNode;
  isExpanded: boolean;
  onClick: (e: React.MouseEvent) => void;
}

const ConditionButton = ({
  children,
  isExpanded,
  onClick,
}: ConditionButtonProps) => {
  const [hover, setHover] = useState(false);
  const [areModalsShown, setModalsShown] = useState(false);

  return (
    <div
      className={styles.hoverWrapper}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={styles.wrapper} onClick={onClick}>
        {isExpanded ? <ArrowUpIcon /> : <ArrowDownIcon />}
        <span className={styles.ifText}>If</span>
        {children}
        {hover && !areModalsShown && (
          <div className={styles.editGroup}>
            <EditGroup setModalsShown={setModalsShown} />
          </div>
        )}
      </div>
      {areModalsShown && <ConditionsModals setModalsShown={setModalsShown} />}
    </div>
  );
};

export default ConditionButton;
