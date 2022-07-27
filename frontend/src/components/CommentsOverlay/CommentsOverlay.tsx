import { useDispatch } from "react-redux";
import { pushCommentAction } from "store/commentsSlice";
import { useCommentsSelector, useNewCommentIndex } from "store/hooks";
import styles from "./CommentsOverlay.module.scss";
import CommentMarker from "components/CommentMarker";
import { MouseEvent } from "react";

const CommentsOverlay = () => {
  const dispatch = useDispatch();
  const newCommentIndex = useNewCommentIndex();
  const comments = useCommentsSelector();

  const addComment = (e: MouseEvent) => {
    const target = e.nativeEvent.target as Element;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newCommentPayload = {
      id: newCommentIndex,
      content: "",
      posX: (x * 100) / target.clientWidth,
      posY: (y * 100) / target.clientHeight,
      isOpen: true,
    };
    dispatch(pushCommentAction(newCommentPayload));
  };

  return (
    <div className={styles.wrapper} onClick={addComment}>
      {Array.isArray(comments) &&
        comments.map((item) => (
          <CommentMarker
            posX={item.posX}
            posY={item.posY}
            id={item.id}
            content={item.content}
            isOpen={item.isOpen}
            key={item.id}
          />
        ))}
    </div>
  );
};

export default CommentsOverlay;
