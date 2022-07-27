import styles from "./AllocationButton.module.scss";
import { ArrowDownIcon } from "assets/icons";
import { useModalsSelector, useOpenModal } from "store/hooks";
import FoundAllocationModals from "components/Modals/FoundAllocationModals";
import { formatAllocationType } from "helpers/formatAllocationType";
import { AllocationTypes } from "store/strategyCreationSlice";

interface AllocationButtonProps {
  submitted?: boolean;
  type?: AllocationTypes | null;
  value?: string | null;
}

const AllocationButton = ({
  submitted,
  type,
  value,
}: AllocationButtonProps) => {
  const { allocation } = useModalsSelector();
  const openModal = useOpenModal("allocation");

  return (
    <>
      <div className={styles.wrapper} onClick={openModal}>
        <ArrowDownIcon />
        <span className={styles.title}>FoundAllocation</span>
        <span className={styles.content}>
          {submitted && type ? formatAllocationType(type, value) : "set type"}
        </span>
      </div>
      {allocation && <FoundAllocationModals />}
    </>
  );
};

export default AllocationButton;
