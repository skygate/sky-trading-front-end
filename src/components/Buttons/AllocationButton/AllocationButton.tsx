import styles from "./AllocationButton.module.scss";
import { ArrowDownIcon } from "assets/icons";
import {
  useAllocationSelector,
  useModalsSelector,
  useOpenModal,
} from "store/hooks";
import FoundAllocationModals from "components/Modals/FoundAllocationModals/FoundAllocationModals";
import { formatAllocationType } from "helpers/formatAllocationType";

interface AllocationButtonProps {
  id: string;
}

const AllocationButton = ({ id }: AllocationButtonProps) => {
  const modal = useModalsSelector(id);
  const openModal = useOpenModal(id);
  const allocation = useAllocationSelector(id);

  return (
    <>
      <div className={styles.wrapper} onClick={() => openModal()}>
        <ArrowDownIcon />
        <span className={styles.title}>FoundAllocation</span>
        <span className={styles.content}>
          {allocation?.submitted && allocation?.type
            ? formatAllocationType(allocation.type, allocation.value)
            : "set type"}
        </span>
      </div>
      {modal?.isOpen && <FoundAllocationModals allocationId={id} />}
    </>
  );
};

export default AllocationButton;
