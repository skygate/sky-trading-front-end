import React, { useEffect, useState } from "react";
import { CloseIcon, TrashIcon, UserIcon } from "assets/icons";
import TextInput from "components/Common/TextInput";
import DoneButton from "components/Buttons/DoneButton";
import styles from "./CommentBox.module.scss";
import { useAppDispatch } from "store/hooks";
import {
  deleteCommentAction,
  editCommentContentAction,
  handleCommentVisibilityAction,
} from "store/commentsSlice";

interface CommentBoxProps {
  id: number;
  content: string;
}

const CommentBox = ({ id, content }: CommentBoxProps) => {
  const [comment, setComment] = useState<null | string>(null);
  const [isInputModeActive, setInputModeActive] = useState(true);
  const [isButtonActive, setButtonActive] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (comment && comment.length > 0) {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  }, [comment]);

  useEffect(() => {
    if (content) {
      setInputModeActive(false);
      setComment(content);
    }
  }, []);

  const handleComment = () => {
    if (!comment || comment.length === 0)
      return dispatch(deleteCommentAction(id));

    setInputModeActive(false);
    dispatch(editCommentContentAction({ id, content: comment }));
    dispatch(handleCommentVisibilityAction({ id, isOpen: false }));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <UserIcon />
          User
        </div>
        <div className={styles.iconSection}>
          <div
            className={styles.trashIcon}
            onClick={() => dispatch(deleteCommentAction(id))}
          >
            <TrashIcon />
          </div>
          <div
            className={styles.closeIcon}
            onClick={() => {
              if (!comment && !content)
                return dispatch(deleteCommentAction(id));
              dispatch(handleCommentVisibilityAction({ id, isOpen: false }));
            }}
          >
            <CloseIcon />
          </div>
        </div>
      </div>
      {!isInputModeActive ? (
        <div
          className={styles.contentWrapper}
          onClick={() => setInputModeActive(true)}
        >
          {content}
        </div>
      ) : (
        <>
          <div className={styles.contentWrapper}>
            <TextInput
              placeholder="Type something here"
              value={comment || ""}
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
