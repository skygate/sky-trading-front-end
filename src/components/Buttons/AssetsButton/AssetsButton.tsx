import React from "react";
import { ArrowDownIcon, ArrowUpIcon } from "assets/icons";
import styles from "./AssetsButton.module.scss";

interface AssetsButtonProps {
  isExpanded: boolean;
}

const AssetsButton = ({ isExpanded }: AssetsButtonProps) => (
  <div className={styles.wrapper}>
    {isExpanded ? <ArrowUpIcon /> : <ArrowDownIcon />}
    Assets
  </div>
);

export default AssetsButton;
