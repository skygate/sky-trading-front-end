import React from "react";
import { CopyIcon, EditIcon, TrashIcon } from "assets/icons";
import styles from "./EditGroup.module.scss";
import { useOpenModal } from "store/hooks";

interface EditGroupProps {
  id: string;
}

const EditGroup = ({ id }: EditGroupProps) => {
  const showModal = useOpenModal(id);

  return (
    <div className={styles.wrapper}>
      <EditIcon
        onClick={(e) => {
          e.stopPropagation();
          showModal();
        }}
      />
      <CopyIcon />
      <TrashIcon />
    </div>
  );
};

export default EditGroup;
