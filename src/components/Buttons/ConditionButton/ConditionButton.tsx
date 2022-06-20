import React, { ReactNode, useState } from "react";
import { ArrowDownIcon, ArrowUpIcon, ErrorIcon } from "assets/icons";
import styles from "./ConditionButton.module.scss";
import EditGroup from "components/EditGroups/EditGroups";
import ConditionsModals from "../../Modals/ConditionsModals/ConditionsModals";
import { useConditionsSelector, useModalsSelector } from "store/hooks";
import cx from "classnames";

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
  const [hover, setHover] = useState(false);
  const [isErrorHover, setErrorHover] = useState(false);
  const modal = useModalsSelector(id);
  const condition = useConditionsSelector(id);

  return (
    <div className={styles.hoverWrapper} onMouseLeave={() => setHover(false)}>
      <div className={styles.wrapper}>
        <div
          onMouseEnter={() => setHover(true)}
          className={cx(
            styles.insideWrapper,
            condition?.isAssetSet && styles.errorWrapper
          )}
          onClick={onClick}
        >
          {isExpanded ? <ArrowUpIcon /> : <ArrowDownIcon />}
          <span className={styles.ifText}>If</span>
          {children}
          {hover && !modal?.isOpen && (
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
                setErrorHover(true);
              }}
              onMouseLeave={() => setErrorHover(false)}
            >
              <ErrorIcon />
            </div>
            {isErrorHover && (
              <div className={styles.errorMessage}>
                You have to set conditions
              </div>
            )}
          </>
        )}
      </div>
      {modal?.isOpen && <ConditionsModals id={id} />}
    </div>
  );
};

export default ConditionButton;
