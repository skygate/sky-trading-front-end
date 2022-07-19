import { MouseEvent, useCallback, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  Edge,
  Node,
} from "react-flow-renderer";
import { initialEdges, initialNodes } from "./initialElements";
import ConditionNode, {
  ConditionNodeTypes,
} from "components/ConditionBlock/ConditionNode";
import DashedEdge from "components/Edges/DashedEdge";

const nodeTypes = { condition: ConditionNode };
const edgeTypes = {
  dashed: DashedEdge,
};

const Flow = () => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodeClick = useCallback(
    (e: MouseEvent, node: Node) => {
      console.log("id to: " + node.id);
      const placeholderIds: any = {
        down: null,
        forward: null,
        edgeDownStart: null,
      };

      for (let item of edges) {
        if (item.target === node.id) {
          placeholderIds.edgeDownStart = item.source;
          console.log(placeholderIds.edgeDownStart);
        }
      }

      setNodes((nds) => {
        placeholderIds.down = parseInt(nds[nds.length - 1].id) + 2;
        placeholderIds.forward = parseInt(nds[nds.length - 1].id) + 1;
        return [
          ...nds.map((item) => {
            if (
              item.id === node.id &&
              item.data.type !== ConditionNodeTypes.START
            ) {
              item.data = {
                ...item.data,
                type: ConditionNodeTypes.DEFAULT,
              };
            }
            return item;
          }),
          {
            id: placeholderIds.forward.toString(),
            type: "condition",
            data: { type: ConditionNodeTypes.PLACEHOLDER },
            position: { x: node.position.x + 200, y: node.position.y },
          },
          {
            id: placeholderIds.down.toString(),
            type: "condition",
            data: { type: ConditionNodeTypes.PLACEHOLDER },
            position: { x: node.position.x, y: node.position.y + 50 },
          },
        ];
      });

      setEdges((eds) => [
        ...eds.map((item) => {
          if (item.target === node.id) {
            item.type = "default";
          }
          return item;
        }),
        {
          id: ["e", node.id, "-", placeholderIds.forward].join(""),
          source: node.id.toString(),
          target: placeholderIds.forward.toString(),
          type: "dashed",
        },
        {
          id: [
            "e",
            placeholderIds.edgeDownStart,
            "-",
            placeholderIds.down,
          ].join(""),
          source: placeholderIds.edgeDownStart,
          target: placeholderIds.down.toString(),
          type: "dashed",
        },
      ]);
    },
    [nodes, edges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      onNodeClick={onNodeClick}
      fitView
    >
      <Background />
      <Controls />
    </ReactFlow>
  );
};

export default Flow;
