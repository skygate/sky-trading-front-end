import React from "react";
import { CopyIcon, EditIcon, TrashIcon } from "../../assets/icons";
import styles from "./EditGroup.module.scss";

const EditGroup = () => (
  <div className={styles.wrapper}>
    <EditIcon />
    <CopyIcon />
    <TrashIcon />
  </div>
);

export default EditGroup;
