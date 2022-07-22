import { Handle, Position } from "react-flow-renderer";
import styles from "./StartEndNode.module.scss";

export enum StartEndNodeTypes {
  START = "start",
  END = "end",
}

export interface ConditionNodeData {
  type: string;
}

interface StartEndNodeProps {
  data: ConditionNodeData;
}

const StartEndNode = ({ data }: StartEndNodeProps) => (
  <>
    <div className={styles.wrapper}>{data.type}</div>
    {data.type === StartEndNodeTypes.START && (
      <Handle type="source" position={Position.Right} />
    )}
    {data.type === StartEndNodeTypes.END && (
      <Handle type="target" position={Position.Left} />
    )}
  </>
);

export default StartEndNode;
