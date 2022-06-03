import React, { useEffect, useState } from "react";
import { UserIcon } from "assets/icons";
import TextInput from "components/Common/Input/TextInput";
import DoneButton from "components/Buttons/DoneButton/DoneButton";
import styles from "./CommentBox.module.scss";

const CommentBox = () => {
  const [comment, setComment] = useState<null | string>(null);
  const [isButtonActive, setButtonActive] = useState(false);
  const [isCommentSubmitted, submitComment] = useState(false);

  useEffect(() => {
    if (comment && comment.length > 0) {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  }, [comment]);

  const handleComment = () => {
    if (comment && comment.length > 0) {
      submitComment(true);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerIcon}>
        <UserIcon />
      </div>
      <div className={styles.header}>User</div>
      {isCommentSubmitted ? (
        <div className={styles.contentWrapper}>{comment}</div>
      ) : (
        <>
          <div className={styles.contentWrapper}>
            <TextInput
              placeholder="Type something here"
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setComment(e.target.value)
              }
            />
          </div>
          <div className={styles.buttonWrapper}>
            <DoneButton onClick={handleComment} active={isButtonActive} />
          </div>
        </>
      )}
    </div>
  );
};

export default CommentBox;
