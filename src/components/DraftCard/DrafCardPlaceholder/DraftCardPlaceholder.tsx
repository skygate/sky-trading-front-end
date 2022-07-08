import { AddDraftCardIcon } from "assets/icons";
import { useNavigate } from "react-router";
import styles from "./DraftCardPlaceholder.module.scss";

interface DraftCardPlaceholderProps {
  children: string;
}

const DraftCardPlaceholder = ({ children }: DraftCardPlaceholderProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper} onClick={() => navigate("/create")}>
      <AddDraftCardIcon />
      <h1 className={styles.header}>{children}</h1>
    </div>
  );
};

export default DraftCardPlaceholder;
