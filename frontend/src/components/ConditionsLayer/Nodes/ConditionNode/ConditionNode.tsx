import { Handle, Position } from "react-flow-renderer";
import styles from "./ConditionNode.module.scss";
import cx from "classnames";

export enum ConditionNodeTypes {
  PLACEHOLDER = "placeholder",
  DEFAULT = "default",
}

export interface ConditionNodeData {
  type: ConditionNodeTypes;
  value?: string;
}

interface ConditionNodeProps {
  data: ConditionNodeData;
}

const ConditionNode = ({ data }: ConditionNodeProps) => {
  const { type, value } = data;
  return (
    <>
      {type === ConditionNodeTypes.DEFAULT && (
        <>
          <Handle type="source" position={Position.Right} />
          <div className={styles.wrapper}>{value || "If set conditions"}</div>
          <Handle type="target" position={Position.Left} />
        </>
      )}
      {type === ConditionNodeTypes.PLACEHOLDER && (
        <>
          <div className={cx(styles.wrapper, styles.placeholderWrapper)}>
            If set conditions
          </div>
          <Handle type="target" position={Position.Left} />
        </>
      )}
    </>
  );
};

export default ConditionNode;
