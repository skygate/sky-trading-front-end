import { useDispatch } from "react-redux";
import { pushCommentAction } from "store/commentsSlice";
import { useCommentsSelector, useNewCommentIndex } from "store/hooks";
import styles from "./CommentsOverlay.module.scss";
import CommentMarker from "components/CommentMarker";

const CommentsOverlay = () => {
  const dispatch = useDispatch();
  const newCommentIndex = useNewCommentIndex();
  const comments = useCommentsSelector();

  const addComment = (e: any) => {
    const rect = e?.nativeEvent.target?.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newCommentPayload = {
      id: newCommentIndex,
      content: "",
      posX: x,
      posY: y,
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
          />
        ))}
    </div>
  );
};

export default CommentsOverlay;
