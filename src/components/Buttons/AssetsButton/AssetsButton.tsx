import React from "react";
import { ArrowDownIcon, ArrowUpIcon } from "assets/icons";
import styles from "./AssetsButton.module.scss";

interface AssetsButtonProps {
  isExpanded: boolean;
  onClick: (e: React.MouseEvent) => void;
}

const AssetsButton = ({ isExpanded, onClick }: AssetsButtonProps) => (
  <div className={styles.wrapper} onClick={onClick}>
    {isExpanded ? <ArrowUpIcon /> : <ArrowDownIcon />}
    Assets
  </div>
);

export default AssetsButton;
