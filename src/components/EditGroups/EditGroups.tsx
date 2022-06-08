import React from "react";
import { CopyIcon, EditIcon, TrashIcon } from "assets/icons";
import styles from "./EditGroup.module.scss";

interface EditGroupProps {
  setModalsShown: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditGroup = ({ setModalsShown }: EditGroupProps) => (
  <div className={styles.wrapper}>
    <EditIcon
      onClick={(e) => {
        e.stopPropagation();
        setModalsShown(true);
      }}
    />
    <CopyIcon />
    <TrashIcon />
  </div>
);

export default EditGroup;
