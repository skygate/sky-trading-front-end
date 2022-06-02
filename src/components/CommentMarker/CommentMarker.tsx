import React from "react";
import { UserIcon } from "../../assets/icons";
import styles from "./CommentMarker.module.scss";

const CommentMarker = () => (
  <div className={styles.wrapper}>
    <UserIcon />
  </div>
);

export default CommentMarker;
