import React, { ReactNode, useState } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "assets/icons";
import styles from "./ConditionButton.module.scss";
import EditGroup from "../../EditGroups/EditGroups";
import SetConditionsModal from "../../Modals/SetConditionsModal/SetConditionsModal";
import ChooseConditionsModal from "../../Modals/ChooseConditionsModal/ChooseConditionsModal";

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
  const [isHover, setHover] = useState(false);
  const [isModalsShown, setModalsShown] = useState(false);

  return (
    <div
      className={styles.hoverWrapper}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={styles.wrapper} onClick={onClick}>
        {isExpanded ? <ArrowUpIcon /> : <ArrowDownIcon />}
        <span style={{ fontWeight: 700 }}>If</span>
        {children}
        {isHover && !isModalsShown && (
          <div className={styles.editGroup}>
            <EditGroup setModalsShown={setModalsShown} />
          </div>
        )}
      </div>
      {isModalsShown && (
        <div className={styles.modalsWrapper}>
          <SetConditionsModal setModalsShown={setModalsShown} />
          <ChooseConditionsModal setModalsShown={setModalsShown} />
        </div>
      )}
    </div>
  );
};

export default ConditionButton;
