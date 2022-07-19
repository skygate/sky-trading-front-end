import { Handle, Position } from "react-flow-renderer";
import styles from "./StartEndNode.module.scss";

export interface ConditionNodeData {
  type: string;
}

interface StartEndNodeProps {
  data: ConditionNodeData;
}

const StartEndNode = ({ data }: StartEndNodeProps) => (
  <>
    <div className={styles.wrapper}>{data.type}</div>
    {data.type === "start" && (
      <Handle type="source" position={Position.Right} />
    )}
    {data.type === "end" && <Handle type="target" position={Position.Left} />}
  </>
);

export default StartEndNode;
