import React, { ReactNode, useState } from "react";
import { ErrorIcon } from "assets/icons";
import styles from "./ConditionButton.module.scss";
import { useConditionsSelector, useModalsSelector } from "store/hooks";
import cx from "classnames";
import DarkOverlay from "components/DarkOverlay";
import { OpenCloseSectionTypes } from "components/StrategyInterface/OpenCloseSection/OpenCloseSection";
import ConditionsLayer from "components/ConditionsLayer/ConditionsLayer";

interface ConditionButtonProps {
  children: ReactNode;
  text?: string;
  onClick: React.MouseEventHandler;
  type: OpenCloseSectionTypes;
}

const ConditionButton = ({
  children,
  onClick,
  text,
  type,
}: ConditionButtonProps) => {
  const [isErrorHovered, setErrorHovered] = useState(false);
  const { [type]: modal } = useModalsSelector();
  const condition = useConditionsSelector(type);

  return (
    <div className={styles.hoverWrapper}>
      <div className={styles.wrapper}>
        <div
          className={cx(
            styles.insideWrapper,
            condition?.isAssetSet && !text && styles.errorWrapper
          )}
          onClick={onClick}
        >
          <span className={styles.ifText}>If</span>
          {children}
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
      {modal.conditions && (
        <>
          <ConditionsLayer type={type} />
          <DarkOverlay modal />
        </>
      )}
    </div>
  );
};

export default ConditionButton;
