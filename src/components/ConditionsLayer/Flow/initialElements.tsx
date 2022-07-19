import { ConditionNodeTypes } from "components/ConditionNode/ConditionNode";
import { Edge, Node } from "react-flow-renderer";

export const initialNodes: Node[] = [
  {
    id: "1",
    type: "condition",
    data: { type: ConditionNodeTypes.START, col: 0, row: 0 },
    position: { x: 10, y: 25 },
  },

  {
    id: "2",
    type: "condition",
    data: { type: ConditionNodeTypes.PLACEHOLDER, col: 1, row: 0 },
    position: { x: 210, y: 25 },
  },
];

export const initialEdges: Edge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: "dashed",
  },
];
