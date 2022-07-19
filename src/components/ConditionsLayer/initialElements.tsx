import { ConditionNodeTypes } from "components/ConditionBlock/ConditionNode";
import { Edge, Node } from "react-flow-renderer";

export const initialNodes: Node[] = [
  {
    id: "1",
    type: "condition",
    data: { type: ConditionNodeTypes.START },
    position: { x: 10, y: 25 },
  },

  {
    id: "2",
    type: "condition",
    data: { type: ConditionNodeTypes.PLACEHOLDER },
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
