import React, { ReactNode, useState } from "react";
import { ErrorIcon } from "assets/icons";
import styles from "./ConditionButton.module.scss";
import EditGroup from "components/EditGroups";
import ConditionsModals from "components/Modals/ConditionsModals";
import { useConditionsSelector, useModalsSelector } from "store/hooks";
import cx from "classnames";
import DarkOverlay from "components/DarkOverlay";

interface ConditionButtonProps {
  id: string;
  children: ReactNode;
  text?: string;
  onClick: React.MouseEventHandler;
}

const ConditionButton = ({
  id,
  children,
  onClick,
  text,
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
            condition?.isAssetSet && !text && styles.errorWrapper
          )}
          onClick={onClick}
        >
          <span className={styles.ifText}>If</span>
          {children}
          {isHovered && !modal?.isOpen && (
            <div className={styles.editGroup}>
              <EditGroup id={id} />
            </div>
          )}
        </div>
        {condition?.isAssetSet && !text && (
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
