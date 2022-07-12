import styles from "./AllocationButton.module.scss";
import { ArrowDownIcon } from "assets/icons";
import { useModalsSelector, useOpenModal } from "store/hooks";
import FoundAllocationModals from "components/Modals/FoundAllocationModals";
import { formatAllocationType } from "helpers/formatAllocationType";

interface AllocationButtonProps {
  id: string;
}

const AllocationButton = ({ id }: AllocationButtonProps) => {
  const { allocation } = useModalsSelector();
  const openModal = useOpenModal("allocation");

  return (
    <>
      <div className={styles.wrapper} onClick={openModal}>
        <ArrowDownIcon />
        <span className={styles.title}>FoundAllocation</span>
        <span className={styles.content}>
          {/*allocation?.submitted && allocation?.type
            ? formatAllocationType(allocation.type, allocation.value)
  : "set type"*/}
        </span>
      </div>
      {allocation && <FoundAllocationModals allocationId={id} />}
    </>
  );
};

export default AllocationButton;
