import React, { ReactNode, useState } from "react";
import { ArrowDownIcon, ArrowUpIcon, ErrorIcon } from "assets/icons";
import styles from "./ConditionButton.module.scss";
import EditGroup from "components/EditGroups/EditGroups";
import ConditionsModals from "components/Modals/ConditionsModals/ConditionsModals";
import { useConditionsSelector, useModalsSelector } from "store/hooks";
import cx from "classnames";
import DarkOverlay from "components/DarkOverlay/DarkOverlay";

interface ConditionButtonProps {
  id: string;
  children: ReactNode;
  isExpanded: boolean;
  onClick: React.MouseEventHandler;
}

const ConditionButton = ({
  id,
  children,
  isExpanded,
  onClick,
}: ConditionButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isErrorHovered, setErrorHovered] = useState(false);
  const modal = useModalsSelector(id);
  const condition = useConditionsSelector(id);

  return (
    <div
      className={styles.hoverWrapper}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.wrapper}>
        <div
          onMouseEnter={() => setIsHovered(true)}
          className={cx(
            styles.insideWrapper,
            condition?.isAssetSet && styles.errorWrapper
          )}
          onClick={onClick}
        >
          {isExpanded ? <ArrowUpIcon /> : <ArrowDownIcon />}
          <span className={styles.ifText}>If</span>
          {children}
          {isHovered && !modal?.isOpen && (
            <div className={styles.editGroup}>
              <EditGroup id={id} />
            </div>
          )}
        </div>
        {condition?.isAssetSet && (
          <>
            <div
              className={styles.errorIcon}
              onMouseEnter={() => {
                setErrorHovered(true);
              }}
              onMouseLeave={() => setErrorHovered(false)}
            >
              <ErrorIcon />
            </div>
            {isErrorHovered && (
              <div className={styles.errorMessage}>
                You have to set conditions
              </div>
            )}
          </>
        )}
      </div>
      {modal?.isOpen && (
        <>
          <DarkOverlay modal />
          <ConditionsModals id={id} />
        </>
      )}
    </div>
  );
};

export default ConditionButton;
