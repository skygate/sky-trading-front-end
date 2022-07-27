import { UserIcon } from "assets/icons";
import CommentBox from "components/CommentBox";
import DarkOverlay from "components/DarkOverlay";
import { handleCommentVisibilityAction } from "store/commentsSlice";
import { useAppDispatch } from "store/hooks";
import cx from "classnames";
import styles from "./CommentMarker.module.scss";

interface CommentMarkerProps {
  posX: number;
  posY: number;
  id: number;
  content: string;
  isOpen: boolean;
}

const CommentMarker = ({
  posX,
  posY,
  id,
  content,
  isOpen,
}: CommentMarkerProps) => {
  const dispatch = useAppDispatch();
  return (
    <>
      {isOpen && <DarkOverlay />}
      <div
        style={{ top: `${posY}%`, left: `${posX}%` }}
        onClick={(e) => e.stopPropagation()}
        className={cx(styles.wrapper, !isOpen && styles.markerWrapper)}
      >
        {isOpen ? (
          <CommentBox id={id} content={content} />
        ) : (
          <button
            type="button"
            className={styles.marker}
            onClick={() =>
              dispatch(handleCommentVisibilityAction({ id, isOpen: true }))
            }
          >
            <UserIcon />
          </button>
        )}
      </div>
    </>
  );
};

export default CommentMarker;
