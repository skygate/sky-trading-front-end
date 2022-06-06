import React from "react";
import { CopyIcon, EditIcon, TrashIcon } from "assets/icons";
import styles from "./EditGroup.module.scss";

interface EditGroupProps {
  setModalsShown: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditGroup = ({ setModalsShown }: EditGroupProps) => {
  const handleModalVisibility = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalsShown(true);
  };

  return (
    <div className={styles.wrapper}>
      <EditIcon onClick={handleModalVisibility} />
      <CopyIcon />
      <TrashIcon />
    </div>
  );
};

export default EditGroup;
