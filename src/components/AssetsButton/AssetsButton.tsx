import React, { ReactNode } from "react";
import { ArrowDownIcon } from "../../assets/icons";
import styles from "./AssetsButton.module.scss";

const AssetsButton = () => (
  <div className={styles.wrapper}>
    <ArrowDownIcon />
    Assets
  </div>
);

export default AssetsButton;
