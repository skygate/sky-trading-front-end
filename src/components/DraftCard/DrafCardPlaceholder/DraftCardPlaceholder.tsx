import { AddDraftCardIcon } from "assets/icons";
import styles from "./DraftCardPlaceholder.module.scss";

interface DraftCardPlaceholderProps {
  children: string;
}

const DraftCardPlaceholder = ({ children }: DraftCardPlaceholderProps) => (
  <div className={styles.wrapper}>
    <AddDraftCardIcon />
    <h1 className={styles.header}>{children}</h1>
  </div>
);

export default DraftCardPlaceholder;
