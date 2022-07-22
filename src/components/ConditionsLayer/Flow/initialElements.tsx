import { ConditionNodeTypes } from "components/ConditionsLayer/Nodes/ConditionNode/ConditionNode";
import { Edge, Node } from "react-flow-renderer";
import { StartEndNodeTypes } from "../Nodes/StartEndNode/StartEndNode";

export enum NodeTypes {
  START_END = "startEnd",
  CONDITION = "condition",
}

export enum EdgeTypes {
  DASHED = "dashed",
  DEFAULT = "default",
}

export const initialNodes: Node[] = [
  {
    id: "1",
    type: NodeTypes.START_END,
    data: { type: StartEndNodeTypes.START },
    position: { x: 10, y: 10 },
  },
  {
    id: "2",
    type: NodeTypes.CONDITION,
    data: { type: ConditionNodeTypes.PLACEHOLDER, col: 0, row: 0 },
    position: { x: 110, y: 25 },
  },
];

export const initialEdges: Edge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: EdgeTypes.DASHED,
  },
];
