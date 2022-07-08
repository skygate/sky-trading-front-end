import { AddDraftCardIcon } from "assets/icons";
import { useNavigate } from "react-router";
import styles from "./DraftCardPlaceholder.module.scss";

interface DraftCardPlaceholderProps {
  children: string;
}

const DraftCardPlaceholder = ({ children }: DraftCardPlaceholderProps) => {
  const navigate = useNavigate();

  return (
    <a className={styles.wrapper} onClick={() => navigate("/create")}>
      <AddDraftCardIcon />
      <h1 className={styles.header}>{children}</h1>
    </a>
  );
};

export default DraftCardPlaceholder;
