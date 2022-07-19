import { MouseEvent, useCallback, useEffect, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  Edge,
  Node,
} from "react-flow-renderer";
import ConditionNode, { ConditionNodeTypes } from "components/ConditionNode";
import DashedEdge from "components/Edges/DashedEdge";
import { initialEdges, initialNodes } from "./initialElements";

const nodeTypes = { condition: ConditionNode };
const edgeTypes = {
  dashed: DashedEdge,
};

interface FlowProps {
  arePlaceholdersVisible: boolean;
}

const Flow = ({ arePlaceholdersVisible }: FlowProps) => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  const [filtratedNodes, setFiltretedNodes] = useState<Node[]>(initialNodes);
  const [filtratedEdges, setFiltretedEdges] = useState<Edge[]>(initialEdges);

  useEffect(() => {
    if (arePlaceholdersVisible) {
      setFiltretedNodes(nodes);
      setFiltretedEdges(edges);
    } else {
      setFiltretedNodes(
        nodes.filter(
          (item) => item.data.type !== ConditionNodeTypes.PLACEHOLDER
        )
      );
      setFiltretedEdges(edges.filter((item) => item.type !== "dashed"));
    }
  }, [arePlaceholdersVisible, nodes, edges]);

  const onNodeClick = useCallback(
    (e: MouseEvent, node: Node) => {
      if (node.data.type !== ConditionNodeTypes.PLACEHOLDER) return;
      const placeholderIds: any = {
        down: null,
        forward: null,
        edgeDownStart: null,
      };

      placeholderIds.edgeDownStart = edges.find(
        (item) => item.target === node.id
      )?.source;

      setNodes((nds) => {
        placeholderIds.down = parseInt(nds[nds.length - 1].id) + 2;
        placeholderIds.forward = parseInt(nds[nds.length - 1].id) + 1;
        return [
          ...nds.map((item) => {
            if (item.id === node.id) {
              item.data = {
                ...item.data,
                type: ConditionNodeTypes.DEFAULT,
              };
            }
            if (item.data.row > node.data.row) {
              item.data = {
                ...item.data,
                row: item.data.row + 1,
              };
              item.position = {
                ...item.position,
                y: item.position.y + 50,
              };
            }
            return item;
          }),
          {
            id: placeholderIds.forward.toString(),
            type: "condition",
            data: {
              type: ConditionNodeTypes.PLACEHOLDER,
              col: node.data.col + 1,
              row: node.data.row,
            },
            position: { x: node.position.x + 200, y: node.position.y },
          },
          {
            id: placeholderIds.down.toString(),
            type: "condition",
            data: {
              type: ConditionNodeTypes.PLACEHOLDER,
              col: node.data.col,
              row: node.data.row + 1,
            },
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
      nodes={filtratedNodes}
      edges={filtratedEdges}
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
