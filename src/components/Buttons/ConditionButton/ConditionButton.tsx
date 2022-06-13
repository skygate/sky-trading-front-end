import React, { ReactNode, useState } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "assets/icons";
import styles from "./ConditionButton.module.scss";
import EditGroup from "components/EditGroups/EditGroups";
import ConditionsModals from "../../Modals/ConditionsModals/ConditionsModals";
import { useModalsSelector } from "store/hooks";

interface ConditionButtonProps {
  id: string;
  children: ReactNode;
  isExpanded: boolean;
  onClick: (e: React.MouseEvent) => void;
}

const ConditionButton = ({
  id,
  children,
  isExpanded,
  onClick,
}: ConditionButtonProps) => {
  const [hover, setHover] = useState(false);
  const modal = useModalsSelector(id);

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
        {hover && !modal?.isOpen && (
          <div className={styles.editGroup}>
            <EditGroup id={id} />
          </div>
        )}
      </div>
      {modal?.isOpen && <ConditionsModals id={id} />}
    </div>
  );
};

export default ConditionButton;
