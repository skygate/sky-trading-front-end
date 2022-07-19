import { ConditionNodeTypes } from "components/ConditionsLayer/Nodes/ConditionNode/ConditionNode";
import { Edge, Node } from "react-flow-renderer";

export const initialNodes: Node[] = [
  {
    id: "1",
    type: "startEnd",
    data: { type: "start" },
    position: { x: 10, y: 10 },
  },
  {
    id: "2",
    type: "condition",
    data: { type: ConditionNodeTypes.PLACEHOLDER, col: 0, row: 0 },
    position: { x: 110, y: 25 },
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
