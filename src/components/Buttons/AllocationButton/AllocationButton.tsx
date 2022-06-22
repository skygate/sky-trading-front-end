import styles from "./AllocationButton.module.scss";
import { ArrowDownIcon } from "assets/icons";
import { useModalsSelector, useOpenModal } from "store/hooks";
import FoundAllocationModals from "components/Modals/FoundAllocationModals/FoundAllocationModals";

interface AllocationButtonProps {
  id: string;
}

const AllocationButton = ({ id }: AllocationButtonProps) => {
  const modal = useModalsSelector(id);
  const openModal = useOpenModal(id);

  return (
    <>
      <div className={styles.wrapper} onClick={() => openModal()}>
        <ArrowDownIcon />
        <span style={{ fontWeight: 500 }}>FoundAllocation</span>
        set type
      </div>
      {modal?.isOpen && <FoundAllocationModals id={id} />}
    </>
  );
};

export default AllocationButton;
