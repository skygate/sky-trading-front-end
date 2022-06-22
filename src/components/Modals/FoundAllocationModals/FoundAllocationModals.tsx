import DarkOverlay from "components/DarkOverlay/DarkOverlay";
import styles from "./FoundAllocationModals.module.scss";
import ChooseFoundAllocationModal from "./ChooseFoundAllocationModal/ChooseFoundAllocationModal";
import FoundAllocationModal from "./FoundAllocationModal/FoundAllocationModal";

interface FoundAllocationModalsProps {
  id: string;
}

const FoundAllocationModals = ({ id }: FoundAllocationModalsProps) => (
  <>
    <div className={styles.wrapper}>
      <FoundAllocationModal id={id} />
      <ChooseFoundAllocationModal id={id} />
    </div>
    <DarkOverlay />
  </>
);

export default FoundAllocationModals;
